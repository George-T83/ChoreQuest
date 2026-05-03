import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './services/auth.interceptor';

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
    provideAnimations(),
    importProvidersFrom(
      ToastrModule.forRoot({
        timeOut: 4000,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing',
        easing: 'ease-in',
        easeTime: 300,
        tapToDismiss: true,
        newestOnTop: true,
      }),
    ),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),

    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
  ],
};
