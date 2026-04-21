import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

const firebaseConfig = {
   apiKey: 'AIzaSyBGgvO9h2S-OXEaU-WkEfpmZsLvflhxhZ4',
    authDomain: 'chorequest-f39a1.firebaseapp.com',
    projectId: 'chorequest-f39a1',
    storageBucket: 'chorequest-f39a1.firebasestorage.app',
    messagingSenderId: '604513016340',
    appId: '1:604513016340:web:2ef9eddad7945d2efea501',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideRouter(routes),
    provideHttpClient(),
    provideFirestore(() => getFirestore()),
  ],
};
