import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  inject,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, onSnapshot, collection, query, where } from '@angular/fire/firestore';
import { TaskService } from '../../services/task';
import { Subscription } from 'rxjs';
import { Badge, computeBadges, formatStreak } from '../../utils/badge';
import { AuthService } from '../../services/auth';
import { HouseholdService } from '../../services/household';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-navbar.html',
  styleUrls: ['./top-navbar.css'],
})
export class TopNavbarComponent implements OnInit, OnDestroy {
  @Input() pageTitle = 'Dashboard';
  @Output() logoutClicked = new EventEmitter<void>();

  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private cdr = inject(ChangeDetectorRef);
  private taskService = inject(TaskService);
  private authService = inject(AuthService);
  private householdService = inject(HouseholdService);

  currentUser: any = null;
  currentUserPoints = 0;
  currentUserName: string | null = null;
  currentUserStreak = 0;
  currentUserBadges: Badge[] = [];
  isProfileMenuOpen = false;

  tasksAssignedCount = 0;
  overdueCount = 0;
  currentUserRank: number | null = null;

  private profileSub: Subscription | null = null;
  private householdSub: Subscription | null = null;
  private tasksSub: Subscription | null = null;

  get streakDisplay(): string {
    return formatStreak(this.currentUserStreak);
  }

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;
      if (user) {
        if (this.profileSub) {
          this.profileSub.unsubscribe();
        }
        this.profileSub = this.authService.getUserProfileStream().subscribe((data) => {
          if (data) {
            this.currentUserPoints = data['points'] ?? 0;
            this.currentUserName = data['display_name'] || null;
            this.currentUserStreak = data['streak'] ?? 0;
            const totalTasks = data['total_tasks_completed'] ?? 0;
            this.currentUserBadges = computeBadges(totalTasks, this.currentUserPoints);
            this.cdr.detectChanges();
          }
        });

        if (this.householdSub) {
          this.householdSub.unsubscribe();
        }
        this.householdSub = this.householdService.household$.subscribe((hh) => {
          if (hh && hh.members && this.currentUser) {
            const uid = this.currentUser.uid;
            const members = [...hh.members];
            members.sort((a: any, b: any) => {
              if (b.points !== a.points) return (b.points ?? 0) - (a.points ?? 0);
              if (b.streak !== a.streak) return (b.streak ?? 0) - (a.streak ?? 0);
              if (a.id === hh.admin_id) return -1;
              if (b.id === hh.admin_id) return 1;
              return 0;
            });
            const rankIndex = members.findIndex((m: any) => m.id === uid);
            this.currentUserRank = rankIndex !== -1 ? rankIndex + 1 : null;
          } else {
            this.currentUserRank = null;
          }
          this.cdr.detectChanges();
        });

        // Run overdue streak check for all household members silently on load
        this.taskService.checkOverdueStreaks().subscribe({
          error: (err) => console.warn('Overdue streak check failed:', err),
        });
      }
      this.cdr.detectChanges();
    });

    this.tasksSub = this.taskService.tasks$.subscribe((tasks) => {
      if (!this.currentUser) {
        this.tasksAssignedCount = 0;
        this.overdueCount = 0;
        this.cdr.detectChanges();
        return;
      }

      const uid = this.currentUser.uid;
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      this.tasksAssignedCount = tasks.filter(
        (t: any) => t.assigned_to === uid && t.status !== 'completed',
      ).length;

      this.overdueCount = tasks.filter((t: any) => {
        if (t.assigned_to !== uid) return false;
        if (t.status === 'completed') return false;
        if (!t.due_date) return false;
        const due = new Date(t.due_date);
        due.setHours(0, 0, 0, 0);
        return due.getTime() < today.getTime();
      }).length;

      this.cdr.detectChanges();
    });
  }



  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isProfileMenuOpen) return;
    const target = event.target as HTMLElement | null;
    if (!target) return;
    if (!target.closest('.profile-menu-container')) {
      this.isProfileMenuOpen = false;
      this.cdr.detectChanges();
    }
  }

  onLogout(): void {
    this.logoutClicked.emit();
  }

  ngOnDestroy(): void {
    if (this.profileSub) {
      this.profileSub.unsubscribe();
    }
    if (this.householdSub) {
      this.householdSub.unsubscribe();
    }
    if (this.tasksSub) {
      this.tasksSub.unsubscribe();
    }
  }
}
