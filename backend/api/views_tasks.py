from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.conf import settings
from firebase_admin import firestore
import uuid
from datetime import datetime, timezone, timedelta
from .household_utils import _get_user_household_doc

# ── Grace period: 12 hours after due date before penalty kicks in ──────────────
LATE_GRACE_HOURS = 12

# ── Penalty: 20% of base points, minimum 0 ────────────────────────────────────
LATE_PENALTY_PERCENT = 0.20


def _serialize_task(task):
    if hasattr(task.get('due_date'), 'isoformat'):
        task['due_date'] = task['due_date'].isoformat()
    if hasattr(task.get('created_at'), 'isoformat'):
        task['created_at'] = task['created_at'].isoformat()
    if hasattr(task.get('completed_at'), 'isoformat'):
        task['completed_at'] = task['completed_at'].isoformat()
    return task


def _calculate_penalty(base_points: int, due_date, now: datetime):
    """
    Returns (points_to_award, was_late, points_deducted).
    12-hour grace period before penalty kicks in.
    Penalty is 20% of base points, minimum 0.
    """
    if due_date is None:
        return base_points, False, 0

    if due_date.tzinfo is None:
        due_date = due_date.replace(tzinfo=timezone.utc)

    deadline_with_grace = due_date + timedelta(hours=LATE_GRACE_HOURS)

    if now <= deadline_with_grace:
        return base_points, False, 0

    penalty = int(base_points * LATE_PENALTY_PERCENT)
    points_to_award = max(0, base_points - penalty)
    return points_to_award, True, penalty


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_task(request):
    """
    Admin-only. Creates a new task in the household's 'tasks' subcollection.
    """
    uid = request.user.username
    db = settings.FIREBASE_DB

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    if household_data.get('admin_id') != uid:
        return Response({'detail': 'Only the household admin can create tasks.'}, status=403)

    title        = request.data.get('title', '').strip()
    assigned_to  = request.data.get('assigned_to', '').strip()
    due_date_str = request.data.get('due_date', '').strip()
    difficulty   = request.data.get('difficulty', 'Easy').strip()

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
                    status=400,
                )
        except (ValueError, TypeError):
            return Response(
                {'detail': 'Recurrence interval must be a whole number of days.'},
                status=400,
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

    try:
        if due_date_str:
            clean_date = due_date_str.split('T')[0]
            due_date = datetime.strptime(clean_date, "%Y-%m-%d").replace(
                hour=12, tzinfo=timezone.utc
            )
        else:
            due_date = None
    except ValueError:
        return Response(
            {'detail': 'Invalid due_date format. Use ISO 8601 (YYYY-MM-DD).'},
            status=400,
        )

    task_id = str(uuid.uuid4())
    task_data = {
        'id':                       task_id,
        'title':                    title,
        'assigned_to':              assigned_to,
        'assigned_to_name':         assigned_to_name,
        'created_by':               uid,
        'due_date':                 due_date,
        'difficulty':               difficulty,
        'points':                   points,
        'status':                   'pending',
        'is_recurring':             is_recurring,
        'recurrence_interval_days': recurrence_interval_days,
        'created_at':               firestore.SERVER_TIMESTAMP,
    }

    write_result = household_ref.collection('tasks').document(task_id).set(task_data)

    response_task_data = dict(task_data)
    response_task_data['created_at'] = getattr(write_result, 'update_time', None)
    response_task_data = _serialize_task(response_task_data)

    return Response(response_task_data, status=201)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_household_tasks(request):
    """
    Returns all tasks for the current user's household.
    """
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
        if 'points' not in task:
            task['points'] = 0
        if 'is_recurring' not in task:
            task['is_recurring'] = False
        if 'recurrence_interval_days' not in task:
            task['recurrence_interval_days'] = None
        tasks.append(_serialize_task(task))

    return Response(tasks, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def complete_task(request, task_id):
    """
    Marks a task as completed. Only the assigned user can complete it.

    SCRUM-62: Penalty calculation is inside the transaction so if the
    transaction retries due to contention, penalty is always recalculated
    from the latest task state rather than a stale pre-transaction read.
    """
    uid = request.user.username
    db  = settings.FIREBASE_DB
    now = datetime.now(timezone.utc)

    client_due_date_str = request.data.get('due_date', '').strip()

    household_data, household_ref = _get_user_household_doc(uid)
    if not household_data:
        return Response({'detail': 'You are not in a household.'}, status=400)

    task_ref = household_ref.collection('tasks').document(task_id)
    task_doc = task_ref.get()
    if not task_doc.exists:
        return Response({'detail': 'Task not found.'}, status=404)

    task = task_doc.to_dict()
    if task.get('assigned_to') != uid:
        return Response(
            {'detail': 'Only the assigned user can complete this task.'},
            status=403,
        )

    # ── Shared result container so transaction can pass data back out ─────────
    result = {}

    @firestore.transactional
    def update_task_and_award_points(transaction):
        # ── Read task inside transaction (fresh state on every retry) ─────────
        task_doc_tx = task_ref.get(transaction=transaction)
        if not task_doc_tx.exists:
            raise ValueError('Task not found.')

        task_tx = task_doc_tx.to_dict()

        if task_tx.get('status') == 'completed':
            raise ValueError('Task is already completed.')

        is_recurring  = task_tx.get('is_recurring', False)
        db_due_date   = task_tx.get('due_date')
        interval_days = task_tx.get('recurrence_interval_days', None)

        # ── Idempotency guard for recurring tasks ─────────────────────────────
        if is_recurring and client_due_date_str and db_due_date:
            client_date_only = client_due_date_str.split('T')[0]
            if hasattr(db_due_date, 'strftime'):
                db_date_only = db_due_date.strftime('%Y-%m-%d')
            else:
                db_date_only = str(db_due_date).split('T')[0]
            if client_date_only != db_date_only:
                raise ValueError('Task cycle mismatch. This cycle was already completed.')

        # ── Rapid re-completion guard ─────────────────────────────────────────
        last_completed = task_tx.get('completed_at')
        if last_completed and is_recurring:
            try:
                if isinstance(last_completed, str):
                    last_dt = datetime.fromisoformat(last_completed.replace('Z', '+00:00'))
                else:
                    last_dt = last_completed
                if last_dt.tzinfo is None:
                    last_dt = last_dt.replace(tzinfo=timezone.utc)
                if (now - last_dt).total_seconds() < 5:
                    raise ValueError('Task was just completed. Please wait before completing again.')
            except (TypeError, ValueError, AttributeError):
                pass

        # ── Penalty calculation INSIDE transaction (fresh task state) ─────────
        base_points = task_tx.get('points', 0)
        try:
            base_points = max(0, int(base_points))
        except (ValueError, TypeError):
            base_points = 0

        due_date_raw = task_tx.get('due_date')
        if hasattr(due_date_raw, 'isoformat'):
            due_date = due_date_raw
            if due_date.tzinfo is None:
                due_date = due_date.replace(tzinfo=timezone.utc)
        elif isinstance(due_date_raw, str):
            try:
                due_date = datetime.fromisoformat(due_date_raw)
                if due_date.tzinfo is None:
                    due_date = due_date.replace(tzinfo=timezone.utc)
            except ValueError:
                due_date = None
        else:
            due_date = None

        points_to_award, was_late, points_deducted = _calculate_penalty(
            base_points, due_date, now
        )

        # ── Calculate next due date for recurring tasks ────────────────────────
        if is_recurring and interval_days and int(interval_days) >= 1:
            interval = timedelta(days=int(interval_days))
            if was_late:
                new_due_date = now + interval
            else:
                if hasattr(db_due_date, 'isoformat'):
                    base_date = db_due_date
                elif isinstance(db_due_date, str):
                    try:
                        base_date = datetime.fromisoformat(db_due_date.replace('Z', '+00:00'))
                    except ValueError:
                        base_date = now
                else:
                    base_date = now
                if base_date.tzinfo is None:
                    base_date = base_date.replace(tzinfo=timezone.utc)
                if base_date < now:
                    base_date = now
                new_due_date = base_date + interval

            updates = {
                'status':                   'pending',
                'due_date':                 new_due_date,
                'completed_at':             firestore.SERVER_TIMESTAMP,
                'points_awarded':           True,
                'was_late':                 was_late,
                'points_deducted':          points_deducted,
            }
        else:
            updates = {
                'status':          'completed',
                'completed_at':    firestore.SERVER_TIMESTAMP,
                'points_awarded':  True,
                'was_late':        was_late,
                'points_deducted': points_deducted,
            }

        transaction.update(task_ref, updates)

        if points_to_award > 0:
            user_ref = db.collection('users').document(uid)
            transaction.update(user_ref, {
                'points': firestore.Increment(points_to_award)
            })

        updated_task_data = task_tx.copy()
        updated_task_data.update(updates)

        # Store results for response outside transaction
        result['points_to_award']  = points_to_award
        result['was_late']         = was_late
        result['points_deducted']  = points_deducted
        result['is_recurring']     = is_recurring
        result['updated_task']     = updated_task_data

    try:
        transaction = db.transaction()
        update_task_and_award_points(transaction)

        awarded         = result.get('points_to_award', 0)
        was_late        = result.get('was_late', False)
        points_deducted = result.get('points_deducted', 0)
        is_recurring    = result.get('is_recurring', False)
        updated_task    = result.get('updated_task', {})

        if updated_task.get('completed_at') == firestore.SERVER_TIMESTAMP:
            updated_task['completed_at'] = now

        serialized_task = _serialize_task(updated_task)

        return Response({
            'detail':          'Task completed.' if not is_recurring else 'Task completed and reset for next cycle.',
            'points_awarded':  awarded,
            'was_late':        was_late,
            'points_deducted': points_deducted,
            'is_recurring':    is_recurring,
            'task':            serialized_task,
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
    Admin-only. Edits an existing task in the household.
    """
    uid = request.user.username
    db = settings.FIREBASE_DB
    now = datetime.now(timezone.utc)

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
    title        = request.data.get('title', current_task_data.get('title', '')).strip()
    assigned_to  = request.data.get('assigned_to', current_task_data.get('assigned_to', '')).strip()
    due_date_str = request.data.get('due_date', '')
    difficulty   = request.data.get('difficulty', current_task_data.get('difficulty')).strip()

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
            due_date = datetime.strptime(clean_date, "%Y-%m-%d").replace(
                hour=12, tzinfo=timezone.utc
            )
        except ValueError:
            return Response(
                {'detail': 'Invalid due_date format. Use ISO 8601 (YYYY-MM-DD).'},
                status=400,
            )
    else:
        due_date = current_task_data.get('due_date')

    updates = {
        'title':                    title,
        'assigned_to':              assigned_to,
        'assigned_to_name':         assigned_to_name,
        'due_date':                 due_date,
        'difficulty':               difficulty,
        'points':                   points,
        'is_recurring':             is_recurring,
        'recurrence_interval_days': recurrence_interval_days,
        'updated_at':               firestore.SERVER_TIMESTAMP,
    }

    write_result = task_ref.update(updates)

    updated_task_data = current_task_data.copy()
    updated_task_data.update(updates)
    updated_task_data['updated_at'] = getattr(write_result, 'update_time', now)

    return Response(_serialize_task(updated_task_data), status=200)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_task(request, task_id):
    """
    Admin-only. Deletes a task from the household.
    """
    uid = request.user.username

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