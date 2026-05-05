import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Task, CreateTaskPayload, CompleteTaskResponse } from '../models/task';
import { environment } from '../../environments/environment';

const API_BASE = `${environment.apiUrl}/api/tasks`;

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly http = inject(HttpClient);
  private readonly _tasks$ = new BehaviorSubject<Task[]>([]);
  readonly tasks$ = this._tasks$.asObservable();

  loadHouseholdTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API_BASE}/household/`).pipe(
      tap((tasks) => this._tasks$.next(tasks)),
      catchError(this.handleError),
    );
  }

  createTask(payload: CreateTaskPayload): Observable<Task> {
    return this.http.post<Task>(`${API_BASE}/create/`, payload).pipe(
      tap((newTask) => {
        const current = this._tasks$.getValue();
        this._tasks$.next([newTask, ...current]);
      }),
      catchError(this.handleError),
    );
  }

  completeTask(taskId: string, currentDueDate: string): Observable<CompleteTaskResponse> {
    return this.http
      .post<CompleteTaskResponse>(`${API_BASE}/${taskId}/complete/`, { due_date: currentDueDate })
      .pipe(
        tap((response) => {
          const currentTasks = this._tasks$.getValue();
          const updatedTasks = currentTasks.map((t) => (t.id === taskId ? response.task : t));
          this._tasks$.next(updatedTasks);
        }),
        catchError(this.handleError),
      );
  }

  updateTask(taskId: string, payload: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${API_BASE}/${taskId}/update/`, payload).pipe(
      tap((updatedTask) => {
        const currentTasks = this._tasks$.getValue();
        const updatedTasksList = currentTasks.map((t) => (t.id === taskId ? updatedTask : t));
        this._tasks$.next(updatedTasksList);
      }),
      catchError(this.handleError),
    );
  }

  reopenTask(taskId: string): Observable<Task> {
    return this.http.patch<Task>(`${API_BASE}/${taskId}/update/`, { reopen: true }).pipe(
      tap((updatedTask) => {
        const currentTasks = this._tasks$.getValue();
        this._tasks$.next(currentTasks.map((t) => (t.id === taskId ? updatedTask : t)));
      }),
      catchError(this.handleError),
    );
  }

  deleteTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/${taskId}/delete/`).pipe(
      tap(() => {
        const currentTasks = this._tasks$.getValue();
        this._tasks$.next(currentTasks.filter((t) => t.id !== taskId));
      }),
      catchError(this.handleError),
    );
  }

  /**
   * Checks all pending overdue tasks in the household and resets streaks
   * for any member (not just the current user) who has overdue tasks.
   * Safe to call on every page load — only resets streaks that are > 0.
   */
  checkOverdueStreaks(): Observable<{ detail: string; reset_count: number }> {
    return this.http
      .post<{ detail: string; reset_count: number }>(`${API_BASE}/check-overdue-streaks/`, {})
      .pipe(catchError(this.handleError));
  }

  clearTasks(): void {
    this._tasks$.next([]);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const msg = err.error?.detail ?? err.error?.message ?? 'An unexpected error occurred.';
    return throwError(() => new Error(msg));
  }
}
