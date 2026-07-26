import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdSettingsComponent } from './household-settings';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { HouseholdService } from '../../services/household';
import { LeaderboardService } from '../../services/leaderboard';
import { TaskService } from '../../services/task';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

describe('HouseholdSettings', () => {
  let component: HouseholdSettingsComponent;
  let fixture: ComponentFixture<HouseholdSettingsComponent>;

  beforeEach(async () => {
    const mockAuth = { onIdTokenChanged: () => () => {}, onAuthStateChanged: () => () => {} };
    const mockFirestore = {};
    const mockHouseholdService = {
      household$: of(null),
      currentHousehold: null,
      loadMyHousehold: () => of(null),
    };
    const mockLeaderboardService = {
      resetTriggered: of(void 0),
    };
    const mockTaskService = {
      tasks$: of([]),
      clearTasks: () => {},
    };
    const mockToastr = {
      success: () => {},
      error: () => {},
      info: () => {},
    };

    await TestBed.configureTestingModule({
      imports: [HouseholdSettingsComponent],
      providers: [
        { provide: Auth, useValue: mockAuth },
        { provide: Firestore, useValue: mockFirestore },
        { provide: HouseholdService, useValue: mockHouseholdService },
        { provide: LeaderboardService, useValue: mockLeaderboardService },
        { provide: TaskService, useValue: mockTaskService },
        { provide: ToastrService, useValue: mockToastr },
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
