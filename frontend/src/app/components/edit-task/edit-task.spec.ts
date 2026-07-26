import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTaskComponent } from './edit-task';
import { TaskService } from '../../services/task';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

  beforeEach(async () => {
    const mockTaskService = {};
    const mockToastr = {
      success: () => {},
      error: () => {},
    };

    await TestBed.configureTestingModule({
      imports: [EditTaskComponent],
      providers: [
        { provide: TaskService, useValue: mockTaskService },
        { provide: ToastrService, useValue: mockToastr },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    // Provide a minimal task object as required input
    component.task = {
      id: 'task-1',
      title: 'Test Task',
      description: 'Test Description',
      points: 10,
      difficulty: 'Easy',
      status: 'pending',
      assigned_to: 'user-1',
      assigned_to_name: 'User One',
      is_recurring: false,
      created_by: 'user-2',
      due_date: '',
      created_at: '',
      recurrence_interval_days: null,
    };
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
