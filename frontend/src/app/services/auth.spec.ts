import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    const mockAuth = {
      currentUser: null,
      updateCurrentUser: () => Promise.resolve(),
    };

    const mockFirestore = {};
    const mockHttpClient = {
      get: () => of({}),
      post: () => of({}),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Auth, useValue: mockAuth },
        { provide: Firestore, useValue: mockFirestore },
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
