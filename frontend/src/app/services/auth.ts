import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
// 1. Import Firestore tools
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(Auth);
  // 2. Inject Firestore
  private readonly firestore = inject(Firestore);

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // 3. Update register to handle both Auth and Firestore
  register(email: string, password: string): Observable<any> {
    const createAccountAndDoc = async () => {
      // Step A: Create the user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // Step B: Set up the default user document based on your schema
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      const userData = {
        uid: user.uid,
        email: user.email,
        display_name: email.split('@')[0], // Creates a temporary display name from their email
        role: 'member',
        points: 0,
        photo_url: '',
        created_at: new Date(), // Firestore will automatically convert this to a Timestamp
      };

      // Step C: Save the document to the 'users' collection
      await setDoc(userDocRef, userData);

      return userCredential;
    };

    // Wrap the async function in an Observable so your components don't have to change
    return from(createAccountAndDoc());
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}
