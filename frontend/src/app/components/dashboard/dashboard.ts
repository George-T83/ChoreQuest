import {
  Component,
  inject,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, forkJoin, of, Subscription } from 'rxjs';
import { Badge, computeBadges, formatStreak } from '../../utils/badge';
import { finalize, map, take, catchError, timeout } from 'rxjs/operators';
import { HouseholdService } from '../../services/household';
import { TaskService } from '../../services/task';
import { CreateTaskComponent } from '../create-task/create-task';
import { TaskListComponent } from '../task-list/task-list';
import { EditTaskComponent } from '../edit-task/edit-task';
import { Household, HouseholdMember } from '../../models/household';
import { Task } from '../../models/task';
import { MemberStats, buildMemberStats } from '../../utils/member-stats';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterModule,
    CreateTaskComponent,
    TaskListComponent,
    EditTaskComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private auth = inject(Auth);
  private router = inject(Router);
  private householdService = inject(HouseholdService);
  private taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);
  private firestore = inject(Firestore);
  private toastr = inject(ToastrService);

  household$ = this.householdService.household$;

  filterState = {
    status: 'Active',
    assignee: 'All',
    difficulty: 'All',
    pointsMin: null as number | null,
    pointsMax: null as number | null,
    recurring: 'All',
    sortBy: 'dueDate',
    sortDir: 'asc',
  };

  private filters$ = new BehaviorSubject(this.filterState);

  allTasks$ = this.taskService.tasks$;
  filteredTasks$ = combineLatest([this.taskService.tasks$, this.filters$]).pipe(
    map(([tasks, filters]) => {
      let filtered = tasks.filter((task) => {
        if (filters.status !== 'All') {
          const isCompleted = task.status === 'completed';
          let isOverdue = false;

          if (!isCompleted && task.due_date) {
            const due = new Date(task.due_date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            due.setHours(0, 0, 0, 0);
            isOverdue = due.getTime() < today.getTime();
          }

          if (filters.status === 'Active' && isCompleted) return false;
          if (filters.status === 'Completed' && !isCompleted) return false;
          if (filters.status === 'Overdue' && !isOverdue) return false;
          if (filters.status === 'Pending' && (isCompleted || isOverdue)) return false;
        }

        if (filters.assignee !== 'All' && task.assigned_to !== filters.assignee) return false;
        if (filters.difficulty !== 'All' && task.difficulty !== filters.difficulty) return false;
        if (filters.recurring === 'Yes' && !task.is_recurring) return false;
        if (filters.recurring === 'No' && task.is_recurring) return false;

        if (filters.pointsMin !== null && task.points < filters.pointsMin) return false;
        if (filters.pointsMax !== null && task.points > filters.pointsMax) {
          if (filters.pointsMin === null || filters.pointsMax >= filters.pointsMin) {
            return false;
          }
        }

        return true;
      });

      return filtered.sort((a, b) => {
        let comparison = 0;

        if (filters.sortBy === 'points') {
          comparison = a.points - b.points;
        } else if (filters.sortBy === 'difficulty') {
          const diffMap: any = { Easy: 1, Medium: 2, Hard: 3 };
          comparison = (diffMap[a.difficulty] || 0) - (diffMap[b.difficulty] || 0);
        } else if (filters.sortBy === 'dueDate') {
          const dateA = a.due_date ? new Date(a.due_date).getTime() : Infinity;
          const dateB = b.due_date ? new Date(b.due_date).getTime() : Infinity;
          comparison = dateA - dateB;
        }

        if (filters.sortDir === 'desc') comparison *= -1;

        if (comparison === 0 && filters.sortBy !== 'dueDate') {
          const dateA = a.due_date ? new Date(a.due_date).getTime() : Infinity;
          const dateB = b.due_date ? new Date(b.due_date).getTime() : Infinity;
          comparison = dateA - dateB;
        }

        return comparison;
      });
    }),
  );

  isInitialLoading = true;
  hasInitialLoadError = false;
  initialLoadErrorMsg = '';
  isCreateTaskOpen = false;
  isEditTaskOpen = false;
  isProfileMenuOpen = false;
  tasksLoadError = '';

  taskTemplate: Partial<Task> | null = null;
  taskToEdit: Task | null = null;
  currentHouseholdId: string = '';

  currentUser: any = null;
  currentUserPoints: number = 0;
  currentUserName: string | null = null;

  processingTaskIds = new Set<string>();

  /** Live stats (streak, badges) for every household member — passed to task-list */
  memberStatsMap: Map<string, MemberStats> = new Map();

  private authUnsubscribe: (() => void) | null = null;
  private householdSub: Subscription | null = null;

  onFilterChange() {
    this.filters$.next(this.filterState);
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isProfileMenuOpen) return;
    const target = event.target as HTMLElement | null;
    if (!target) return;
    if (!target.closest('.profile-menu-container')) {
      this.isProfileMenuOpen = false;
      this.cdr.detectChanges();
    }
  }

  isAdmin(household: Household): boolean {
    return household.admin_id === this.currentUser?.uid;
  }

  getMembers(household: Household): HouseholdMember[] {
    return household.members as HouseholdMember[];
  }

  copyInviteCode(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        this.toastr.info('Invite code copied to clipboard!', 'Copied');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        this.toastr.error('Failed to copy code to clipboard.', 'Error');
      });
  }

  getMemberName(uid: string, household: Household): string {
    const member = household.members.find((m) => m.id === uid);
    return member ? member.display_name : 'Unknown';
  }

  getMyPendingTaskCount(tasks: any[]): number {
    if (!this.currentUser) return 0;
    return tasks.filter((t) => t.assigned_to === this.currentUser.uid && t.status !== 'completed')
      .length;
  }

  getMyOverdueTaskCount(tasks: any[]): number {
    if (!this.currentUser) return 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return tasks.filter((task) => {
      if (task.assigned_to !== this.currentUser.uid) return false;
      if (task.status === 'completed') return false;
      if (!task.due_date) return false;
      const due = new Date(task.due_date);
      due.setHours(0, 0, 0, 0);
      return due.getTime() < today.getTime();
    }).length;
  }

  openCreateTask(template?: Partial<Task>) {
    this.taskTemplate = template || null;
    this.isCreateTaskOpen = true;
  }
  closeCreateTask() {
    this.isCreateTaskOpen = false;
    this.taskTemplate = null;
  }
  onTaskCreated() {
    this.reloadHouseholdTasks();
  }

  openEditTask(task: Task) {
    this.taskToEdit = task;
    this.isEditTaskOpen = true;
  }

  closeEditTask() {
    this.isEditTaskOpen = false;
    this.taskToEdit = null;
  }

  onTaskUpdated() {
    this.reloadHouseholdTasks();
    this.closeEditTask();
  }

  onTaskCopied(template: Partial<Task>) {
    this.closeEditTask();
    this.openCreateTask(template);
  }

  completeTask(taskId: string) {
    this.processingTaskIds.add(taskId);

    this.allTasks$.pipe(take(1)).subscribe((tasks) => {
      const taskToComplete = tasks.find((t) => t.id === taskId);
      const currentDueDate = taskToComplete?.due_date || '';

      this.taskService
        .completeTask(taskId, currentDueDate)
        .pipe(
          finalize(() => {
            this.processingTaskIds.delete(taskId);
            this.cdr.detectChanges();
          }),
        )
        .subscribe({
          next: () => {
            this.householdService.loadMyHousehold().subscribe();
          },
          error: (err: Error) => this.toastr.error(err.message, 'Error'),
        });
    });
  }

  initData(user: any) {
    this.hasInitialLoadError = false;
    this.initialLoadErrorMsg = '';

    forkJoin({
      household: this.householdService.loadMyHousehold().pipe(
        timeout(45000),
        catchError((err) => {
          console.error('Household load error:', err);
          throw err;
        })
      ),
      tasks: this.taskService.loadHouseholdTasks().pipe(
        timeout(45000),
        catchError((err) => {
          console.error('Tasks load error:', err);
          throw err;
        })
      ),
    }).subscribe({
      next: () => {
        this.isInitialLoading = false;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Initial load failed:', err);
        this.isInitialLoading = false;
        this.hasInitialLoadError = true;
        this.initialLoadErrorMsg = 'Failed to retrieve household data or tasks from server. The connection timed out.';
        this.cdr.detectChanges();
      },
    });
  }

  retryLoading() {
    if (this.currentUser) {
      this.isInitialLoading = true;
      this.hasInitialLoadError = false;
      this.initialLoadErrorMsg = '';
      this.cdr.detectChanges();
      this.initData(this.currentUser);
    }
  }

  private reloadHouseholdTasks() {
    this.tasksLoadError = '';
    this.taskService.loadHouseholdTasks().subscribe({
      next: () => this.cdr.detectChanges(),
      error: (err: Error) => {
        console.error('Failed to load tasks:', err);
        this.tasksLoadError = err.message;
        this.cdr.detectChanges();
      },
    });
  }



  ngOnInit() {
    this.householdSub = this.householdService.household$.subscribe((household) => {
      if (household) {
        this.currentHouseholdId = household.id;
        
        // Build live stats (streak, badges) for every household member locally from members!
        const map = new Map<string, MemberStats>();
        for (const member of household.members) {
          map.set(member.id, {
            uid: member.id,
            streak: member.streak ?? 0,
            badges: computeBadges(member.total_tasks_completed ?? 0, member.points ?? 0),
            streakDisplay: formatStreak(member.streak ?? 0),
          });
        }
        this.memberStatsMap = map;

        // Sync current user name and points
        if (this.currentUser) {
          const me = household.members.find((m) => m.id === this.currentUser.uid);
          if (me) {
            this.currentUserPoints = me.points ?? 0;
            this.currentUserName = me.display_name;
          }
        }
        this.cdr.detectChanges();
      } else {
        this.memberStatsMap = new Map();
      }
    });

    this.authUnsubscribe = this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;

      if (!user) {
        this.router.navigate(['/login']);
        return;
      }

      this.initData(user);
    });
  }

  ngOnDestroy() {
    if (this.authUnsubscribe) this.authUnsubscribe();
    if (this.householdSub) this.householdSub.unsubscribe();
  }

  async logout() {
    try {
      await this.auth.signOut();
      this.householdService.clearHousehold();
      this.taskService.clearTasks();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
