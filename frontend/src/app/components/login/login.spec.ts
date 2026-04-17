import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login';
import { AuthService } from '../../services/auth';
import { provideRouter } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    // 1. Create a dummy AuthService
    const mockAuthService = {
      login: () => Promise.resolve(),
      // If your component uses other methods like register() or logout(),
      // you can just add them here as empty functions too!
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent], // Assuming this is a standalone component
      providers: [
        // 2. Provide the mock service
        { provide: AuthService, useValue: mockAuthService },
        // 3. Provide dummy routing so the Angular Router doesn't crash
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
