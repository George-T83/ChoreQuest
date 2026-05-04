import {
  Component,
  inject,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../services/task';
import { HouseholdMember } from '../../models/household';
import { Task } from '../../models/task';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-task.html',
  styleUrls: ['./edit-task.css'],
})
export class EditTaskComponent implements OnInit {
  private taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);
  private toastr = inject(ToastrService);

  @Input() task!: Task;
  @Input() members: HouseholdMember[] = [];
  @Input() isAdmin: boolean = true;

  @Output() closed = new EventEmitter<void>();
  @Output() taskUpdated = new EventEmitter<void>();

  title = '';
  description = '';
  assigned_to: string | null = '';
  due_date: string | Date | null = '';
  difficulty: 'Easy' | 'Medium' | 'Hard' | null = 'Easy';
  points: number | null = 10;
  is_recurring = false;
  recurrence_interval_days: number | null = 7;

  isSubmitting = false;
  isDeleting = false;
  isReopening = false;
  isCompleting = false;
  errorMessage = '';
  showValidationErrors = false;

  ngOnInit() {
    if (this.task) {
      this.title = this.task.title;
      this.description = this.task.description || '';
      this.assigned_to = this.task.assigned_to;
      this.difficulty = this.task.difficulty as 'Easy' | 'Medium' | 'Hard';
      this.points = this.task.points;
      this.is_recurring = this.task.is_recurring;

      this.recurrence_interval_days = this.task.recurrence_interval_days || 7;

      if (this.task.due_date) {
        const cleanDateStr = this.task.due_date.split('T')[0];
        const [year, month, day] = cleanDateStr.split('-').map(Number);
        this.due_date = new Date(year, month - 1, day);
      } else {
        this.due_date = new Date();
      }
    }
  }

  getLocalDateString(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getNormalizedPoints(): number | null {
    const points = this.points;
    if (points === null || !Number.isFinite(points) || !Number.isInteger(points) || points < 0) {
      return null;
    }
    return points;
  }

  getNormalizedTitle(): string | null {
    const normalizedTitle = this.title.trim();
    return normalizedTitle.length > 0 ? normalizedTitle : null;
  }

  getNormalizedAssignedTo(): string | null {
    if (typeof this.assigned_to !== 'string') return null;
    const normalizedAssignedTo = this.assigned_to.trim();
    return normalizedAssignedTo.length > 0 ? normalizedAssignedTo : null;
  }

  getNormalizedDifficulty(): 'Easy' | 'Medium' | 'Hard' | null {
    if (this.difficulty === 'Easy' || this.difficulty === 'Medium' || this.difficulty === 'Hard') {
      return this.difficulty;
    }
    return null;
  }

  getNormalizedDueDate(): string | null {
    if (this.due_date instanceof Date) {
      return this.getLocalDateString(this.due_date);
    }
    if (typeof this.due_date === 'string' && this.due_date.trim().length > 0) {
      return this.due_date;
    }
    return null;
  }

  getNormalizedRecurrenceInterval(): number | null {
    if (!this.is_recurring) return null;
    const val = this.recurrence_interval_days;
    if (val === null || !Number.isFinite(val) || !Number.isInteger(val) || val < 1) {
      return null;
    }
    return val;
  }

  getPointsErrorMessage(): string | null {
    if (this.points === null) return 'Points are required.';
    if (this.points < 0) return 'Points cannot be negative.';
    if (!Number.isInteger(this.points)) return 'Points must be a whole number (no decimals).';
    return null;
  }

  getRecurrenceErrorMessage(): string | null {
    if (!this.is_recurring) return null;
    const val = this.recurrence_interval_days;
    if (val === null) return 'Recurrence interval is required.';
    if (!Number.isInteger(val) || val < 1) return 'Interval must be a whole number of at least 1.';
    return null;
  }

  get isFormValid(): boolean {
    const recurringValid = !this.is_recurring || this.getNormalizedRecurrenceInterval() !== null;
    return (
      this.getNormalizedTitle() !== null &&
      this.getNormalizedAssignedTo() !== null &&
      this.getNormalizedDifficulty() !== null &&
      this.getNormalizedDueDate() !== null &&
      this.getNormalizedPoints() !== null &&
      recurringValid
    );
  }

  get isBusy(): boolean {
    return this.isSubmitting || this.isDeleting || this.isReopening;
  }

  deleteTask() {
    if (this.isBusy) return;

    if (!confirm('Are you sure you want to delete this task? This cannot be undone.')) {
      return;
    }

    this.isDeleting = true;
    this.errorMessage = '';
    this.cdr.detectChanges();

    this.taskService.deleteTask(this.task.id).subscribe({
      next: () => {
        this.isDeleting = false;
        this.toastr.error(`"${this.task.title}" has been permanently deleted.`, '🗑️ Task Deleted', {
          timeOut: 4000,
        });
        this.close();
      },
      error: (err: Error) => {
        this.isDeleting = false;
        this.errorMessage = err.message || 'A network error occurred.';
        this.cdr.detectChanges();
      },
    });
  }

  onReopen() {
    if (this.isBusy) return;

    this.isReopening = true;
    this.errorMessage = '';
    this.cdr.detectChanges();

    this.taskService.reopenTask(this.task.id).subscribe({
      next: () => {
        this.isReopening = false;
        this.toastr.success(`"${this.task.title}" is back in the queue.`, '🔄 Task Reopened', {
          timeOut: 4000,
        });
        this.taskUpdated.emit();
        this.close();
      },
      error: (err: Error) => {
        this.isReopening = false;
        this.errorMessage = err.message;
        this.cdr.detectChanges();
      },
    });
  }

  markAsComplete() {
    if (this.isCompleting || this.task.status === 'completed') return;
    this.isCompleting = true;
    this.errorMessage = '';
    this.cdr.detectChanges();

    const currentDue = this.task.due_date || '';
    this.taskService.completeTask(this.task.id, currentDue).subscribe({
      next: () => {
        this.isCompleting = false;
        this.toastr.success(`Great! "${this.task.title}" was marked complete.`, 'Task Completed', {
          timeOut: 3500,
        });
        this.taskUpdated.emit();
        this.close();
      },
      error: (err: Error) => {
        this.isCompleting = false;
        this.errorMessage = err.message || 'A network error occurred.';
        this.cdr.detectChanges();
      },
    });
  }

  submit() {
    if (!this.isFormValid) {
      this.showValidationErrors = true;
      return;
    }
    if (this.isBusy) return;

    this.isSubmitting = true;
    this.errorMessage = '';

    const title = this.getNormalizedTitle()!;
    const assignedTo = this.getNormalizedAssignedTo()!;
    const dueDate = this.getNormalizedDueDate()!;
    const difficulty = this.getNormalizedDifficulty()!;
    const points = this.getNormalizedPoints()!;

    const payload: Partial<Task> = {
      title,
      description: this.description.trim() || undefined,
      assigned_to: assignedTo,
      due_date: dueDate,
      difficulty,
      points,
      is_recurring: this.is_recurring,
      recurrence_interval_days: this.is_recurring ? this.getNormalizedRecurrenceInterval() : null,
    };

    this.taskService.updateTask(this.task.id, payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.toastr.success('Task details have been updated.', 'Changes Saved', {
          timeOut: 3500,
        });
        this.taskUpdated.emit();
        this.close();
      },
      error: (err: Error) => {
        this.isSubmitting = false;
        this.errorMessage = err.message;
        this.cdr.detectChanges();
      },
    });
  }

  getMemberName(uid: string): string {
    const member = this.members.find((m) => m.id === uid);
    return member ? member.display_name : 'Unknown';
  }

  formatDueDate(dueDateStr: string | null): string {
    if (!dueDateStr) return 'No due date';
    const due = new Date(dueDateStr);
    if (isNaN(due.getTime())) return 'Invalid date';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    const diff = (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    if (diff < 0)
      return `Was due: ${due.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    return due.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  private isTooEarly(dueDateStr: string | null, intervalDays: number | null | undefined): boolean {
    if (!dueDateStr || !intervalDays) return false;
    const currentDueDate = new Date(dueDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    currentDueDate.setHours(0, 0, 0, 0);
    if (intervalDays === 1) {
      return currentDueDate.getTime() > today.getTime();
    }
    const cycleStartDate = new Date(currentDueDate);
    cycleStartDate.setDate(currentDueDate.getDate() - intervalDays);
    return today.getTime() < cycleStartDate.getTime();
  }

  isCooldown(task: Task): boolean {
    return this.isTooEarly(task.due_date, task.recurrence_interval_days) && !!task.completed_at;
  }

  isOverdue(task: Task): boolean {
    if (!task.due_date || task.status === 'completed') return false;
    const due = new Date(task.due_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    return (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) < 0;
  }

  getStatusText(task: Task): string {
    if (task.status === 'completed') return 'Completed';
    if (this.isOverdue(task)) return 'Overdue';
    if (this.isCooldown(task)) return 'Not Due Yet';
    return 'Active';
  }

  getStatusClass(task: Task): string {
    if (task.status === 'completed') return 'status-badge--completed';
    if (this.isOverdue(task)) return 'status-badge--overdue';
    if (this.isCooldown(task)) return 'status-badge--not-due';
    return 'status-badge--active';
  }

  close() {
    this.closed.emit();
  }
}
