import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth';
import { Auth } from '@angular/fire/auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    // 1. Create a dummy Auth object with the methods you plan to use/test
    const mockAuth = {
      currentUser: null,
      updateCurrentUser: () => Promise.resolve(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        // 2. Tell Angular to provide our fake mockAuth whenever `Auth` is injected
        { provide: Auth, useValue: mockAuth },
      ],
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
