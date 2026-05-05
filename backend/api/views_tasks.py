import uuid
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.conf import settings
from firebase_admin import firestore
from datetime import datetime, timezone, timedelta
import math
from .household_utils import _get_user_household_doc


def _serialize_task(task):
    for field in ('due_date', 'created_at', 'completed_at'):
        if hasattr(task.get(field), 'isoformat'):
            task[field] = task[field].isoformat()
    return task


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_task(request):
    """
    Admin-only. Creates a new task in the household's 'tasks' subcollection.
    Due date must be today or in the future — past dates are rejected to protect streaks.
    """
    uid = request.user.username
    db = settings.FIREBASE_DB

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    if household_data.get('admin_id') != uid:
        return Response({'detail': 'Only the household admin can create tasks.'}, status=403)

    title = request.data.get('title', '').strip()
    description = request.data.get('description', '').strip()
    assigned_to = request.data.get('assigned_to', '').strip()
    due_date_str = request.data.get('due_date', '').strip()
    difficulty = request.data.get('difficulty', 'Easy').strip()

    try:
        points = int(request.data.get('points', 0))
        if points < 0:
            return Response({'detail': 'Points cannot be negative.'}, status=400)
    except (ValueError, TypeError):
        return Response({'detail': 'Points must be a whole number.'}, status=400)

    is_recurring = bool(request.data.get('is_recurring', False))
    recurrence_interval_days = None
    if is_recurring:
        try:
            recurrence_interval_days = int(request.data.get('recurrence_interval_days', 0))
            if recurrence_interval_days < 1:
                return Response(
                    {'detail': 'Recurrence interval must be at least 1 day.'},
                    status=400
                )
        except (ValueError, TypeError):
            return Response(
                {'detail': 'Recurrence interval must be a whole number of days.'},
                status=400
            )

    if not title:
        return Response({'detail': 'Task title is required.'}, status=400)
    if not assigned_to:
        return Response({'detail': 'assigned_to (uid) is required.'}, status=400)
    if difficulty not in ['Easy', 'Medium', 'Hard']:
        return Response({'detail': 'Difficulty must be Easy, Medium, or Hard.'}, status=400)

    if assigned_to not in household_data.get('members', []):
        return Response({'detail': 'Assigned user is not a member of this household.'}, status=400)

    assigned_user_doc = db.collection('users').document(assigned_to).get()
    if not assigned_user_doc.exists:
        return Response({'detail': 'Assigned user not found.'}, status=404)
    assigned_to_name = assigned_user_doc.to_dict().get('display_name', 'Unknown')

    # Parse and validate due date — must be today or future
    try:
        if due_date_str:
            clean_date = due_date_str.split('T')[0]
            due_date = datetime.strptime(clean_date, "%Y-%m-%d").replace(hour=12)
            due_date = due_date.replace(tzinfo=timezone.utc)

            # Reject past dates (subtract 1 day to account for user timezones behind UTC)
            today_start = datetime.now(timezone.utc).replace(
                hour=0, minute=0, second=0, microsecond=0
            ) - timedelta(days=1)
            if due_date < today_start:
                return Response(
                    {'detail': 'Due date cannot be in the past. Please choose today or a future date.'},
                    status=400
                )
        else:
            due_date = None
    except ValueError:
        return Response({'detail': 'Invalid due_date format. Use ISO 8601 (YYYY-MM-DD).'}, status=400)

    task_id = str(uuid.uuid4())
    task_data = {
        'id': task_id,
        'title': title,
        'description': description,
        'assigned_to': assigned_to,
        'assigned_to_name': assigned_to_name,
        'created_by': uid,
        'due_date': due_date,
        'difficulty': difficulty,
        'points': points,
        'status': 'pending',
        'is_recurring': is_recurring,
        'recurrence_interval_days': recurrence_interval_days,
        'created_at': firestore.SERVER_TIMESTAMP,
    }

    write_result = household_ref.collection('tasks').document(task_id).set(task_data)

    response_task_data = dict(task_data)
    response_task_data['created_at'] = getattr(write_result, 'update_time', None)
    response_task_data = _serialize_task(response_task_data)

    return Response(response_task_data, status=201)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_household_tasks(request):
    uid = request.user.username

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    task_docs = household_ref.collection('tasks').order_by(
        'created_at', direction=firestore.Query.DESCENDING
    ).stream()

    tasks = []
    for doc in task_docs:
        task = doc.to_dict()
        if 'description' not in task:
            task['description'] = ''
        if 'points' not in task:
            task['points'] = 0
        if 'is_recurring' not in task:
            task['is_recurring'] = False
        if 'recurrence_interval_days' not in task:
            task['recurrence_interval_days'] = None
        if 'was_late' not in task:
            task['was_late'] = False
        if 'points_deducted' not in task:
            task['points_deducted'] = 0
        tasks.append(_serialize_task(task))

    return Response(tasks, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def check_overdue_streaks(request):
    """
    Checks if a user missed a day.
    Resets streak to 0 for any member whose last completed task was before yesterday.
    Runs for ALL household members. Safe to call on every page load.
    """
    uid = request.user.username
    db = settings.FIREBASE_DB

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    today = datetime.now(timezone.utc)
    today_date = today.strftime('%Y-%m-%d')
    yesterday_date = (today - timedelta(days=1)).strftime('%Y-%m-%d')

    reset_count = 0
    for member_uid in household_data.get('members', []):
        user_ref = db.collection('users').document(member_uid)
        user_doc = user_ref.get()
        if not user_doc.exists:
            continue

        user_data = user_doc.to_dict()
        try:
            current_streak = int(user_data.get('streak', 0))
        except (ValueError, TypeError):
            current_streak = 0

        if current_streak > 0:
            last_streak_date = user_data.get('last_streak_date')
            # If they haven't completed a task today or yesterday, the streak is broken.
            if last_streak_date not in [today_date, yesterday_date]:
                user_ref.update({'streak': 0})
                reset_count += 1

    return Response({
        'detail': f'Streak check complete. {reset_count} streak(s) reset.',
        'reset_count': reset_count,
    }, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def complete_task(request, task_id):
    """
    Marks a task as completed. Assigned users (or the Household Admin) can complete it.
    Awards points and updates streak for the ASSIGNED user.
    Streak counts consecutive days where at least one task was completed.
    """
    uid = request.user.username
    db = settings.FIREBASE_DB

    client_due_date_str = request.data.get('due_date', '').strip()

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    task_ref = household_ref.collection('tasks').document(task_id)

    task_doc = task_ref.get()
    if not task_doc.exists:
        return Response({'detail': 'Task not found.'}, status=404)

    task = task_doc.to_dict()
    is_admin = household_data.get('admin_id') == uid
    assigned_uid = task.get('assigned_to')

    if not assigned_uid:
        return Response({'detail': 'This task has no assigned user to award points to.'}, status=400)

    if assigned_uid != uid and not is_admin:
        return Response({'detail': 'Only the assigned user or admin can complete this task.'}, status=403)

    @firestore.transactional
    def update_task_and_award_points(transaction):
        task_doc_tx = task_ref.get(transaction=transaction)
        if not task_doc_tx.exists:
            raise ValueError('Task not found.')

        task_tx = task_doc_tx.to_dict()

        target_user_ref = db.collection('users').document(assigned_uid)
        user_doc_tx = target_user_ref.get(transaction=transaction)
        user_data = user_doc_tx.to_dict() if user_doc_tx.exists else {}

        if task_tx.get('status') == 'completed':
            raise ValueError('Task is already completed.')

        is_recurring = task_tx.get('is_recurring', False)
        db_due_date = task_tx.get('due_date')

        if is_recurring:
            if client_due_date_str and db_due_date:
                client_date_only = client_due_date_str.split('T')[0]
                if hasattr(db_due_date, 'strftime'):
                    db_date_only = db_due_date.strftime('%Y-%m-%d')
                else:
                    db_date_only = str(db_due_date).split('T')[0]
                if client_date_only != db_date_only:
                    raise ValueError('Task cycle mismatch. This cycle was already completed.')

            last_completed = task_tx.get('completed_at')
            if last_completed:
                try:
                    if isinstance(last_completed, str):
                        last_dt = datetime.fromisoformat(last_completed.replace('Z', '+00:00'))
                    else:
                        last_dt = last_completed
                    if last_dt.tzinfo is None:
                        last_dt = last_dt.replace(tzinfo=timezone.utc)
                    now = datetime.now(timezone.utc)
                    if (now - last_dt).total_seconds() < 5:
                        raise ValueError('Task was just completed. Please wait before completing again.')
                except (TypeError, ValueError, AttributeError):
                    pass

        points_to_award = task_tx.get('points', 0)
        try:
            points_to_award = max(0, int(points_to_award))
        except (ValueError, TypeError):
            points_to_award = 0

        # Streak: increment on consecutive days where at least one task was completed
        try:
            current_streak = int(user_data.get('streak', 0))
        except (ValueError, TypeError):
            current_streak = 0

        last_streak_date = user_data.get('last_streak_date')
        now_utc = datetime.now(timezone.utc)
        today_date = now_utc.strftime('%Y-%m-%d')
        yesterday_date = (now_utc - timedelta(days=1)).strftime('%Y-%m-%d')

        if last_streak_date == today_date:
            new_streak = current_streak
        elif last_streak_date == yesterday_date:
            new_streak = current_streak + 1
        else:
            new_streak = 1

        interval = task_tx.get('recurrence_interval_days', None)
        updated_task_data = task_tx.copy()

        was_late = False
        points_deducted = 0
        awarded_points = points_to_award

        if db_due_date:
            try:
                if isinstance(db_due_date, str):
                    due_dt = datetime.fromisoformat(db_due_date.replace('Z', '+00:00'))
                else:
                    due_dt = db_due_date

                if due_dt.tzinfo is None:
                    due_dt = due_dt.replace(tzinfo=timezone.utc)

                now_check = datetime.now(timezone.utc)
                # Increase grace period to 24 hours (covers up to noon UTC the next day)
                # This guarantees users in timezones behind UTC (like CST/PST) aren't marked late
                grace_end = due_dt + timedelta(hours=24)
                if now_check > grace_end:
                    was_late = True
                    points_deducted = math.floor(points_to_award * 0.20)
                    awarded_points = max(0, points_to_award - points_deducted)
            except Exception:
                was_late = False
                points_deducted = 0
                awarded_points = points_to_award

        if is_recurring and interval and int(interval) >= 1:
            if was_late:
                base_date = datetime.now(timezone.utc)
            else:
                if hasattr(db_due_date, 'isoformat'):
                    base_date = db_due_date
                elif isinstance(db_due_date, str):
                    try:
                        base_date = datetime.fromisoformat(db_due_date.replace('Z', '+00:00'))
                    except ValueError:
                        base_date = datetime.now(timezone.utc)
                else:
                    base_date = datetime.now(timezone.utc)

            if base_date.tzinfo is None:
                base_date = base_date.replace(tzinfo=timezone.utc)

            now_utc = datetime.now(timezone.utc)
            if base_date < now_utc:
                base_date = now_utc

            new_due_date = base_date + timedelta(days=int(interval))

            task_updates = {
                'status': 'pending',
                'due_date': new_due_date,
                'completed_at': firestore.SERVER_TIMESTAMP,
                'points_awarded': True,
                'was_late': was_late,
                'points_deducted': points_deducted,
            }
        else:
            task_updates = {
                'status': 'completed',
                'completed_at': firestore.SERVER_TIMESTAMP,
                'points_awarded': True,
                'was_late': was_late,
                'points_deducted': points_deducted,
            }

        user_updates = {
            'total_tasks_completed': firestore.Increment(1),
            'streak': new_streak,
            'last_streak_date': today_date,
        }
        if awarded_points > 0:
            user_updates['points'] = firestore.Increment(awarded_points)

        transaction.set(task_ref, task_updates, merge=True)
        transaction.set(target_user_ref, user_updates, merge=True)

        updated_task_data.update(task_updates)

        return awarded_points, is_recurring, updated_task_data, points_deducted, was_late

    try:
        transaction = db.transaction()
        awarded_points, is_recurring, updated_task, points_deducted, was_late = update_task_and_award_points(transaction)

        if updated_task.get('completed_at') == firestore.SERVER_TIMESTAMP:
            updated_task['completed_at'] = datetime.now(timezone.utc)

        serialized_task = _serialize_task(updated_task)

        return Response({
            'detail': 'Task completed.' if not is_recurring else 'Task completed and reset for next cycle.',
            'points_awarded': awarded_points,
            'was_late': was_late,
            'points_deducted': points_deducted,
            'is_recurring': is_recurring,
            'task': serialized_task
        }, status=200)

    except ValueError as e:
        if 'already completed' in str(e) or 'cycle mismatch' in str(e):
            return Response({'detail': str(e)}, status=400)
        if 'wait before completing' in str(e):
            return Response({'detail': str(e)}, status=429)
        return Response({'detail': str(e)}, status=400)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_task(request, task_id):
    """
    Admin-only. Edits an existing task.
    """
    uid = request.user.username
    db = settings.FIREBASE_DB

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    if household_data.get('admin_id') != uid:
        return Response({'detail': 'Only the household admin can edit tasks.'}, status=403)

    task_ref = household_ref.collection('tasks').document(task_id)
    task_doc = task_ref.get()

    if not task_doc.exists:
        return Response({'detail': 'Task not found.'}, status=404)

    current_task_data = task_doc.to_dict()
    title = request.data.get('title', current_task_data.get('title', '')).strip()
    description = request.data.get('description', current_task_data.get('description', '')).strip()
    assigned_to = request.data.get('assigned_to', current_task_data.get('assigned_to', '')).strip()
    due_date_str = request.data.get('due_date', '')
    difficulty = request.data.get('difficulty', current_task_data.get('difficulty')).strip()

    try:
        points = int(request.data.get('points', current_task_data.get('points', 0)))
        if points < 0:
            return Response({'detail': 'Points cannot be negative.'}, status=400)
    except (ValueError, TypeError):
        return Response({'detail': 'Points must be a whole number.'}, status=400)

    is_recurring = bool(request.data.get('is_recurring', current_task_data.get('is_recurring', False)))
    recurrence_interval_days = None

    if is_recurring:
        try:
            recurrence_interval_days = int(request.data.get('recurrence_interval_days', 0))
            if recurrence_interval_days < 1:
                return Response({'detail': 'Recurrence interval must be at least 1 day.'}, status=400)
        except (ValueError, TypeError):
            return Response({'detail': 'Recurrence interval must be a whole number of days.'}, status=400)

    if not title:
        return Response({'detail': 'Task title is required.'}, status=400)
    if not assigned_to:
        return Response({'detail': 'assigned_to (uid) is required.'}, status=400)
    if difficulty not in ['Easy', 'Medium', 'Hard']:
        return Response({'detail': 'Difficulty must be Easy, Medium, or Hard.'}, status=400)
    if assigned_to not in household_data.get('members', []):
        return Response({'detail': 'Assigned user is not a member of this household.'}, status=400)

    assigned_to_name = current_task_data.get('assigned_to_name', 'Unknown')
    if assigned_to != current_task_data.get('assigned_to'):
        assigned_user_doc = db.collection('users').document(assigned_to).get()
        if not assigned_user_doc.exists:
            return Response({'detail': 'Assigned user not found.'}, status=404)
        assigned_to_name = assigned_user_doc.to_dict().get('display_name', 'Unknown')

    if due_date_str:
        try:
            clean_date = due_date_str.split('T')[0]
            due_date = datetime.strptime(clean_date, "%Y-%m-%d").replace(hour=12)
            due_date = due_date.replace(tzinfo=timezone.utc)

            # Reject past dates (subtract 1 day to account for user timezones behind UTC)
            today_start = datetime.now(timezone.utc).replace(
                hour=0, minute=0, second=0, microsecond=0
            ) - timedelta(days=1)
            if due_date < today_start:
                return Response(
                    {'detail': 'Due date cannot be in the past. Please choose today or a future date.'},
                    status=400
                )
        except ValueError:
            return Response({'detail': 'Invalid due_date format. Use ISO 8601 (YYYY-MM-DD).'}, status=400)
    else:
        due_date = current_task_data.get('due_date')

    updates = {
        'title': title,
        'description': description,
        'assigned_to': assigned_to,
        'assigned_to_name': assigned_to_name,
        'due_date': due_date,
        'difficulty': difficulty,
        'points': points,
        'is_recurring': is_recurring,
        'recurrence_interval_days': recurrence_interval_days,
        'updated_at': firestore.SERVER_TIMESTAMP,
    }

    if bool(request.data.get('reopen', False)) and current_task_data.get('status') == 'completed':
        updates['status'] = 'pending'
        updates['completed_at'] = None
        updates['was_late'] = False
        updates['points_deducted'] = 0
        updates['points_awarded'] = 0

        if due_date:
            try:
                if isinstance(due_date, str):
                    due_dt = datetime.fromisoformat(due_date.replace('Z', '+00:00'))
                else:
                    due_dt = due_date

                if due_dt.tzinfo is None:
                    due_dt = due_dt.replace(tzinfo=timezone.utc)

                now = datetime.now(timezone.utc)
                # Ensure reopen calculation uses the same 24-hour grace period
                grace_end = due_dt + timedelta(hours=24)
                
                if now > grace_end:
                    # Bump due date to tomorrow at noon UTC so they have a full day to complete it
                    tomorrow = now + timedelta(days=1)
                    updates['due_date'] = tomorrow.replace(hour=12, minute=0, second=0, microsecond=0)
            except (ValueError, TypeError, AttributeError):
                pass

    write_result = task_ref.update(updates)

    updated_task_data = current_task_data.copy()
    updated_task_data.update(updates)
    updated_task_data['updated_at'] = getattr(write_result, 'update_time', datetime.now(timezone.utc))

    return Response(_serialize_task(updated_task_data), status=200)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_task(request, task_id):
    """
    Admin-only. Deletes a task from the household.
    """
    uid = request.user.username
    db = settings.FIREBASE_DB

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    if household_data.get('admin_id') != uid:
        return Response({'detail': 'Only the household admin can delete tasks.'}, status=403)

    task_ref = household_ref.collection('tasks').document(task_id)
    if not task_ref.get().exists:
        return Response({'detail': 'Task not found.'}, status=404)

    task_ref.delete()
    return Response({'detail': 'Task deleted successfully.'}, status=200)