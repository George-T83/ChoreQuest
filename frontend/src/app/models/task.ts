export interface Task {
  id: string;
  title: string;
  assigned_to: string;
  assigned_to_name?: string;
  created_by: string;
  due_date: string | null;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'pending' | 'completed';
  created_at: string;
  points: number;
  is_recurring: boolean;
  recurrence_interval_days: number | null;
<<<<<<< HEAD
=======
  completed_at?: string | null;
>>>>>>> f8e5588 (feat: add ngx-toastr for notifications and enhance dashboard UI)
  was_late?: boolean;
  points_deducted?: number;
}

export interface CreateTaskPayload {
  title: string;
  assigned_to: string;
  due_date: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  is_recurring: boolean;
  recurrence_interval_days: number | null;
}

export interface CompleteTaskResponse {
  detail: string;
  points_awarded: number;
  was_late: boolean;
  points_deducted: number;
  is_recurring: boolean;
  task: Task;
}
