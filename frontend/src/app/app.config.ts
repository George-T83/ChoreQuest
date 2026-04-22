import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// 1. Add the Firestore import
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    // 2. Add the Firestore provider so the rest of your app can use it
    provideFirestore(() => getFirestore()),

    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
  ],
};
