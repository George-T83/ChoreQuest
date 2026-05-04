import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { TopNavbarComponent } from '../top-navbar/top-navbar';
import { BottomNavbarComponent } from '../bottom-navbar/bottom-navbar';
import { LeaderboardService } from '../../services/leaderboard';
import { HouseholdService } from '../../services/household';
import { TaskService } from '../../services/task';
import { Auth } from '@angular/fire/auth';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopNavbarComponent, BottomNavbarComponent, RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class LayoutComponent implements OnInit {
  private router = inject(Router);
  private auth = inject(Auth);
  private cdr = inject(ChangeDetectorRef);
  private leaderboardService = inject(LeaderboardService);
  private householdService = inject(HouseholdService);
  private taskService = inject(TaskService);

  pageTitle = 'Dashboard';
  currentPage: string = 'dashboard';
  showResetButton = false;
  inHousehold = false;

  ngOnInit(): void {
    this.householdService.household$.subscribe((hh) => {
      this.inHousehold = !!hh;
      this.cdr.detectChanges();
    });
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.householdService.loadMyHousehold().subscribe();
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.url;
        this.updatePageInfo(url);
      });

    this.updatePageInfo(this.router.url);
  }

  private updatePageInfo(url: string): void {
    if (url.includes('/leaderboard')) {
      this.pageTitle = 'Leaderboard';
      this.currentPage = 'leaderboard';
      this.showResetButton = true;
    } else if (url.includes('/household-settings')) {
      this.pageTitle = 'Household Settings';
      this.currentPage = 'household-settings';
      this.showResetButton = false;
    } else if (url.includes('/profile')) {
      this.pageTitle = 'Profile';
      this.currentPage = 'profile';
      this.showResetButton = false;
    } else if (url.includes('/household/')) {
      this.pageTitle = 'Household';
      this.currentPage = 'household';
      this.showResetButton = false;
    } else {
      this.pageTitle = 'Dashboard';
      this.currentPage = 'dashboard';
      this.showResetButton = false;
    }
    this.cdr.detectChanges();
  }

  onReset(): void {
    this.leaderboardService.triggerReset();
  }

  onLogout(): void {
    this.auth.signOut().then(() => {
      this.householdService.clearHousehold();
      this.taskService.clearTasks();
      this.router.navigate(['/login']);
    });
  }
}
