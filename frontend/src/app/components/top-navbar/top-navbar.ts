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

  currentUser: any = null;
  currentUserPoints = 0;
  currentUserName: string | null = null;
  currentUserStreak = 0;
  currentUserBadges: Badge[] = [];
  isProfileMenuOpen = false;

  tasksAssignedCount = 0;
  overdueCount = 0;
  currentUserRank: number | null = null;

  private pointsUnsubscribe: (() => void) | null = null;
  private tasksSub: Subscription | null = null;
  private unsubscribeHousehold: (() => void) | null = null;
  private unsubscribeMembers: (() => void) | null = null;

  get streakDisplay(): string {
    return formatStreak(this.currentUserStreak);
  }

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;
      if (user) {
        this.subscribeToUserData(user.uid);
        this.subscribeToLeaderboardRank(user.uid);
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

  private subscribeToUserData(uid: string): void {
    if (this.pointsUnsubscribe) {
      this.pointsUnsubscribe();
    }

    const userDocRef = doc(this.firestore, `users/${uid}`);
    this.pointsUnsubscribe = onSnapshot(userDocRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        this.currentUserPoints = data['points'] ?? 0;
        this.currentUserName = data['display_name'] || null;
        this.currentUserStreak = data['streak'] ?? 0;
        const totalTasks = data['total_tasks_completed'] ?? 0;
        this.currentUserBadges = computeBadges(totalTasks, this.currentUserPoints);
        this.cdr.detectChanges();
      }
    });
  }

  private subscribeToLeaderboardRank(uid: string): void {
    if (this.unsubscribeHousehold) {
      this.unsubscribeHousehold();
    }

    const householdsRef = collection(this.firestore, 'households');
    const householdQuery = query(householdsRef, where('members', 'array-contains', uid));

    this.unsubscribeHousehold = onSnapshot(householdQuery, (hSnap) => {
      if (!hSnap.empty) {
        const householdData = hSnap.docs[0].data();
        const memberUids = householdData['members'] || [];
        const adminId = householdData['admin_id'] || '';

        if (memberUids.length > 0) {
          const usersRef = collection(this.firestore, 'users');
          const usersQuery = query(usersRef, where('uid', 'in', memberUids));

          if (this.unsubscribeMembers) {
            this.unsubscribeMembers();
          }

          this.unsubscribeMembers = onSnapshot(usersQuery, (uSnap) => {
            const members: any[] = [];
            uSnap.forEach((docSnap) => {
              members.push({
                uid: docSnap.data()['uid'],
                points: docSnap.data()['points'] || 0,
                streak: docSnap.data()['streak'] || 0,
                isAdmin: docSnap.data()['uid'] === adminId
              });
            });

            members.sort((a, b) => {
              if (b.points !== a.points) return b.points - a.points;
              if (b.streak !== a.streak) return b.streak - a.streak;
              if (a.isAdmin) return -1;
              if (b.isAdmin) return 1;
              return 0;
            });

            const rankIndex = members.findIndex(m => m.uid === uid);
            this.currentUserRank = rankIndex !== -1 ? rankIndex + 1 : null;
            this.cdr.detectChanges();
          });
        }
      } else {
        this.currentUserRank = null;
        this.cdr.detectChanges();
      }
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
    if (this.pointsUnsubscribe) {
      this.pointsUnsubscribe();
    }
    if (this.tasksSub) {
      this.tasksSub.unsubscribe();
    }
    if (this.unsubscribeHousehold) {
      this.unsubscribeHousehold();
    }
    if (this.unsubscribeMembers) {
      this.unsubscribeMembers();
    }
  }
}
