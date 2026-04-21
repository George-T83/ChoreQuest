import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component'; // <-- 1. Import your new component

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register').then((m) => m.RegisterComponent),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent } // <-- 2. Add a route for the profile component
];
