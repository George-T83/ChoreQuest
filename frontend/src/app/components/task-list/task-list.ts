import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../../models/task';
import { Household } from '../../models/household';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() household!: Household;
  @Input() currentUserUid: string = '';
  @Input() isAdmin: boolean = false;
  @Input() tasksLoadError: string = '';

  // FIXED: Added @Input() decorator
  @Input() processingTaskIds: Set<string> = new Set<string>();

  @Output() openCreateTask = new EventEmitter<void>();

  // FIXED: Renamed back to editTask to match dashboard bindings
  @Output() editTask = new EventEmitter<Task>();

  // FIXED: Added dummy completeTask output to satisfy dashboard.html binding
  @Output() completeTask = new EventEmitter<string>();

  constructor(
    private taskService: TaskService,
    private toastr: ToastrService,
  ) {}

  isAssignedToMe(assignedTo: string): boolean {
    return assignedTo === this.currentUserUid;
  }

  isCompleted(task: any): boolean {
    return task.status === 'completed';
  }

  isTooEarly(dueDateStr: string | null, intervalDays: number | null | undefined): boolean {
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

  isCooldown(task: any): boolean {
    return this.isTooEarly(task.due_date, task.recurrence_interval_days) && !!task.completed_at;
  }

  isFutureLocked(task: any): boolean {
    return this.isTooEarly(task.due_date, task.recurrence_interval_days) && !task.completed_at;
  }

  getMemberName(uid: string): string {
    if (!this.household?.members) return 'Unknown';
    const member = this.household.members.find((m) => m.id === uid);
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

  getDisplayDueDate(task: any): string | null {
    if (!task.due_date) return null;
    if (this.isCooldown(task) && task.recurrence_interval_days) {
      const displayDate = new Date(task.due_date);
      displayDate.setDate(displayDate.getDate() - task.recurrence_interval_days);
      return displayDate.toISOString();
    }
    return task.due_date;
  }

  getUrgency(dueDateStr: string | null, status: string): string {
    if (status === 'completed' || !dueDateStr) return '';
    const due = new Date(dueDateStr);
    if (isNaN(due.getTime())) return '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    const diff = (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    if (diff < 0) return 'OVERDUE';
    if (diff === 0) return 'Due today';
    return '';
  }

  onComplete(taskId: string): void {
    if (this.processingTaskIds.has(taskId)) return;

    const task = this.tasks.find((t) => t.id === taskId);
    const currentDueDate = task?.due_date ?? '';

    this.processingTaskIds.add(taskId);

    this.taskService.completeTask(taskId, currentDueDate).subscribe({
      next: (response) => {
        this.processingTaskIds.delete(taskId);
        if (response.was_late) {
          this.toastr.warning(
            `−${response.points_deducted} pt late penalty applied. You still earned ${response.points_awarded} pts!`,
            '⏰ Better late than never!',
            { enableHtml: true, timeOut: 6000 },
          );
        } else if (response.points_awarded > 0) {
          this.toastr.success(
            `+${response.points_awarded} pts added to your score`,
            '🏆 Quest complete!',
            { enableHtml: true },
          );
        } else {
          this.toastr.success('Chore cleared from the board.', 'Done!', {
            enableHtml: true,
          });
        }
      },
      error: (err: Error) => {
        this.processingTaskIds.delete(taskId);
        this.toastr.error(err.message, 'Something went wrong', {
          enableHtml: true,
          timeOut: 5000,
        });
      },
    });
  }

  onOpenCreateTask(): void {
    this.openCreateTask.emit();
  }

  onEditTask(task: Task): void {
    this.editTask.emit(task);
  }
}
