import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(Auth);

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  register(email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}
