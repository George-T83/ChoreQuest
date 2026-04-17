import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register';
import { AuthService } from '../../services/auth';
import { provideRouter } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    // 1. Create a dummy AuthService for the register component
    const mockAuthService = {
      register: () => Promise.resolve(),
    };

    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        // 2. Provide the mock service
        { provide: AuthService, useValue: mockAuthService },
        // 3. Provide dummy routing
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
