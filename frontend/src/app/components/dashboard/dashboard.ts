import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { HouseholdService } from '../../services/household';
import { TaskService } from '../../services/task';
import { CreateTaskComponent } from '../create-task/create-task';
import { TaskListComponent } from '../task-list/task-list';
import { Household, HouseholdMember } from '../../models/household';
import { Task } from '../../models/task';
import { EditTaskComponent } from '../edit-task/edit-task';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
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

  // Master list of tasks for the Header Badge and Background logic
  allTasks$ = this.taskService.tasks$;

  // Filtered and Sorted list for the UI Display
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
          // "Pending" means incomplete and NOT overdue yet
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

        if (filters.sortDir === 'desc') {
          comparison = comparison * -1;
        }

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
  isCreateTaskOpen = false;
  tasksLoadError = '';

  isEditTaskOpen = false;
  taskToEdit: Task | null = null;

  currentUser: any = null;

  private authUnsubscribe: (() => void) | null = null;

  onFilterChange() {
    this.filters$.next(this.filterState);
  }

  isAdmin(household: Household): boolean {
    return household.admin_id === this.currentUser?.uid;
  }

  getMembers(household: Household): HouseholdMember[] {
    return household.members as HouseholdMember[];
  }

  openCreateTask() {
    this.isCreateTaskOpen = true;
  }

  closeCreateTask() {
    this.isCreateTaskOpen = false;
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

  private reloadHouseholdTasks() {
    this.tasksLoadError = '';
    this.taskService.loadHouseholdTasks().subscribe({
      next: () => {
        this.cdr.detectChanges();
      },
      error: (err: Error) => {
        console.error('Failed to load tasks:', err);
        this.tasksLoadError = err.message;
        this.cdr.detectChanges();
      },
    });
  }

  getMyPendingTaskCount(tasks: any[]): number {
    if (!this.currentUser) return 0;

    return tasks.filter(
      (task) => task.assigned_to === this.currentUser.uid && task.status !== 'completed',
    ).length;
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

  ngOnInit() {
    this.authUnsubscribe = this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;

      if (!user) {
        this.router.navigate(['/login']);
        return;
      }

      this.householdService.loadMyHousehold().subscribe({
        next: (household) => {
          this.isInitialLoading = false;
          if (household) {
            this.reloadHouseholdTasks();
          }
          this.cdr.detectChanges();
        },
        error: () => {
          this.isInitialLoading = false;
          this.cdr.detectChanges();
        },
      });
    });
  }

  copyInviteCode(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        this.toastr.success(`Invite code ${code} copied to clipboard!`, '📋 Copied');
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

  ngOnDestroy(): void {
    if (this.authUnsubscribe) {
      this.authUnsubscribe();
    }
  }
}
