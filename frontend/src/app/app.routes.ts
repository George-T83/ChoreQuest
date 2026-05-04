import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { ProfileComponent } from './components/profile/profile';
import { HouseholdSettingsComponent } from './components/household-settings/household-settings';
import { LayoutComponent } from './components/layout/layout';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register').then((m) => m.RegisterComponent),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'leaderboard',
        loadComponent: () =>
          import('./components/leaderboard/leaderboard').then((m) => m.LeaderboardComponent),
      },
      {
        path: 'household-settings',
        component: HouseholdSettingsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'household/create',
        loadComponent: () =>
          import('./components/household/create-household/create-household').then(
            (m) => m.CreateHouseholdComponent,
          ),
      },
      {
        path: 'household/join',
        loadComponent: () =>
          import('./components/household/join-household/join-household').then(
            (m) => m.JoinHouseholdComponent,
          ),
      },
    ],
  },

  { path: '**', redirectTo: '/dashboard' },
];
