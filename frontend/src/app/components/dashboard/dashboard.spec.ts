import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { HouseholdService } from '../../services/household';
import { TaskService } from '../../services/task';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const mockAuth = {
      onAuthStateChanged: (cb: any) => {
        cb(null);
        return () => {};
      }
    };
    const mockFirestore = {};
    const mockHouseholdService = {
      household$: of(null),
      loadMyHousehold: () => of(null),
    };
    const mockTaskService = {
      tasks$: of([]),
      loadHouseholdTasks: () => of([]),
      checkOverdueStreaks: () => of({}),
    };
    const mockToastr = {
      success: () => {},
      error: () => {},
      info: () => {},
    };

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        { provide: Auth, useValue: mockAuth },
        { provide: Firestore, useValue: mockFirestore },
        { provide: HouseholdService, useValue: mockHouseholdService },
        { provide: TaskService, useValue: mockTaskService },
        { provide: ToastrService, useValue: mockToastr },
        provideRouter([{ path: 'login', redirectTo: '' }]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
