import {
  Component,
  inject,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HouseholdService } from '../../services/household';
import { TaskService } from '../../services/task';
import { CreateTaskComponent } from '../create-task/create-task';
import { TaskListComponent } from '../task-list/task-list';
import { EditTaskComponent } from '../edit-task/edit-task';
import { LeaderboardHistoryComponent } from '../leaderboard-history/leaderboard-history';
import { Household, HouseholdMember } from '../../models/household';
import { Task } from '../../models/task';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CreateTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    LeaderboardHistoryComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private householdService = inject(HouseholdService);
  private taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);

  household$ = this.householdService.household$;

  filterState = {
    status: 'All',
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

  isProfileMenuOpen = false;
  isInitialLoading = true;
  isCreateTaskOpen = false;
  isEditTaskOpen = false;
  isHistoryModalOpen = false;
  isResettingLeaderboard = false;
  tasksLoadError = '';

  taskToEdit: Task | null = null;

  currentUser: any = null;
  currentUserPoints: number = 0;
  currentUserName: string | null = null;

  processingTaskIds = new Set<string>();

  private authUnsubscribe: (() => void) | null = null;
  private pointsUnsubscribe: (() => void) | null = null;

  // ── Filter ─────────────────────────────────────────────────────────────────
  onFilterChange() {
    this.filters$.next(this.filterState);
  }

  // ── Profile menu ───────────────────────────────────────────────────────────
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

  // ── Household helpers ──────────────────────────────────────────────────────
  isAdmin(household: Household): boolean {
    return household.admin_id === this.currentUser?.uid;
  }

  isAssignedToMe(assignedTo: string): boolean {
    return assignedTo === this.currentUser?.uid;
  }

  getMembers(household: Household): HouseholdMember[] {
    return household.members as HouseholdMember[];
  }

  copyInviteCode(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => alert(`Invite code ${code} copied to clipboard!`))
      .catch(err => console.error('Failed to copy:', err));
  }

  getMemberName(uid: string, household: Household): string {
    const member = household.members.find(m => m.id === uid);
    return member ? member.display_name : 'Unknown';
  }

  getMyPendingTaskCount(tasks: any[]): number {
    if (!this.currentUser) return 0;
    return tasks.filter(
      t => t.assigned_to === this.currentUser.uid && t.status !== 'completed'
    ).length;
  }

  // ── Create task ────────────────────────────────────────────────────────────
  openCreateTask() { this.isCreateTaskOpen = true; }
  closeCreateTask() { this.isCreateTaskOpen = false; }
  onTaskCreated() { this.reloadHouseholdTasks(); }

  // ── Edit task ──────────────────────────────────────────────────────────────
  openEditTask(task: Task) {
    this.taskToEdit = task;
    this.isEditTaskOpen = true;
  }

  closeEditTask() {
    this.isEditTaskOpen = false;
    this.taskToEdit = null;
  }

  currentHouseholdId: string = '';

  openHistoryModal() {
    console.log('openHistoryModal called');
    this.householdService.household$.pipe(take(1)).subscribe(household => {
      if (household) {
        this.currentHouseholdId = household.id;
        this.isHistoryModalOpen = true;
        this.cdr.detectChanges();
      }
    });
  }
  closeHistoryModal() { this.isHistoryModalOpen = false; }

  // ── Reset leaderboard ──────────────────────────────────────────────────────
  resetLeaderboard(): void {
    if (!confirm('Are you sure you want to reset all points? This cannot be undone.')) return;

    this.isResettingLeaderboard = true;

    this.http.post<any>('/api/household/reset-leaderboard/', {}).subscribe({
      next: (response) => {
        this.isResettingLeaderboard = false;
        this.currentUserPoints = 0;
        this.toastr.success(
          `${response.winner_name} wins this cycle with ${response.winner_points} pts!`,
          'Leaderboard Reset! 🏆',
        );
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isResettingLeaderboard = false;
        this.toastr.error(
          err.error?.detail ?? 'Failed to reset leaderboard.',
          'Error',
        );
        this.cdr.detectChanges();
      },
    });
  }

  // ── Complete task ──────────────────────────────────────────────────────────
  completeTask(taskId: string) {
    this.processingTaskIds.add(taskId);

    this.allTasks$.pipe(take(1)).subscribe((tasks) => {
      const taskToComplete = tasks.find(t => t.id === taskId);
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
          next: () => { },
          error: (err: Error) => alert(err.message),
        });
    });
  }

  // ── Tasks ──────────────────────────────────────────────────────────────────
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

  // ── Points listener ────────────────────────────────────────────────────────
  private subscribeToUserPoints(uid: string) {
    if (this.pointsUnsubscribe) this.pointsUnsubscribe();

    const userDocRef = doc(this.firestore, `users/${uid}`);
    this.pointsUnsubscribe = onSnapshot(userDocRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        this.currentUserPoints = data['points'] ?? 0;
        this.currentUserName = data['display_name'] || null;
        this.cdr.detectChanges();
      }
    });
  }

  // ── Lifecycle ──────────────────────────────────────────────────────────────
  ngOnInit() {
    this.authUnsubscribe = this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;

      if (!user) {
        this.router.navigate(['/login']);
        return;
      }

      this.subscribeToUserPoints(user.uid);

      this.householdService.loadMyHousehold().subscribe({
        next: (household) => {
          this.isInitialLoading = false;
          if (household) this.reloadHouseholdTasks();
          this.cdr.detectChanges();
        },
        error: () => {
          this.isInitialLoading = false;
          this.cdr.detectChanges();
        },
      });
    });
  }

  ngOnDestroy() {
    if (this.authUnsubscribe) this.authUnsubscribe();
    if (this.pointsUnsubscribe) this.pointsUnsubscribe();
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
