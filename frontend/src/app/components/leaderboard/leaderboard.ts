import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  inject,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection, query, onSnapshot, where, doc } from '@angular/fire/firestore';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export interface HouseholdMember {
  id: string;
  firstName: string;
  lastName: string;
  initials: string;
  points: number;
  streak: number;
  totalTasksCompleted: number; // Added the new backend field tracking
  statusBadge: 'MVP' | 'On fire' | 'You' | 'No activity' | null;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leaderboard.html',
  styleUrls: ['./leaderboard.css'],
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  private firestore = inject(Firestore);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private auth = inject(Auth);
  private http = inject(HttpClient);

  isAdmin = false;
  isResetting = false;
  currentUid = '';
  allMembers: HouseholdMember[] = [];
  topThree: HouseholdMember[] = [];

  totalChoresCompleted = 0;
  topStreakHolder = '';
  topStreakDays = 0;

  currentUser: any = null;
  currentUserPoints = 0;
  currentUserName: string | null = null;
  isProfileMenuOpen = false;
  householdAdminId = '';

  private unsubscribeHousehold: (() => void) | null = null;
  private unsubscribeMembers: (() => void) | null = null;
  private pointsUnsubscribe: (() => void) | null = null;
  private authUnsubscribe: (() => void) | null = null;

  ngOnInit(): void {
    this.authUnsubscribe = this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;

      if (!user) {
        this.router.navigate(['/login']);
        return;
      }

      this.subscribeToUserPoints(user.uid);
      this.currentUid = user.uid;
      this.fetchLeaderboardData(user.uid);
      this.cdr.detectChanges();
    });
  }

  fetchLeaderboardData(uid: string): void {
    if (this.unsubscribeHousehold) {
      this.unsubscribeHousehold();
    }

    const householdsRef = collection(this.firestore, 'households');
    const householdQuery = query(householdsRef, where('members', 'array-contains', uid));

    this.unsubscribeHousehold = onSnapshot(
      householdQuery,
      (hSnap) => {
        if (!hSnap.empty) {
          const householdData = hSnap.docs[0].data();
          const memberUids = householdData['members'] || [];
          this.householdAdminId = householdData['admin_id'] || '';
          this.isAdmin = this.currentUid === this.householdAdminId;

          if (memberUids.length > 0) {
            const usersRef = collection(this.firestore, 'users');
            const usersInHouseholdQuery = query(usersRef, where('uid', 'in', memberUids));

            if (this.unsubscribeMembers) {
              this.unsubscribeMembers();
            }

            this.unsubscribeMembers = onSnapshot(
              usersInHouseholdQuery,
              (uSnap) => {
                const members: HouseholdMember[] = [];

                uSnap.forEach((docSnap) => {
                  const data = docSnap.data();
                  data['id'] = docSnap.id;
                  members.push(this.mapToHouseholdMember(data));
                });

                members.sort((a, b) => b.points - a.points);

                members.forEach((member, index) => {
                  if (member.streak === 0) {
                    member.statusBadge = 'No activity';
                  } else if (index === 0) {
                    member.statusBadge = 'MVP';
                  } else if (member.streak >= 3) {
                    member.statusBadge = 'On fire';
                  } else if (member.id === this.currentUid) {
                    member.statusBadge = 'You';
                  } else {
                    member.statusBadge = null;
                  }
                });

                this.totalChoresCompleted = members.reduce(
                  (sum, member) => sum + member.totalTasksCompleted,
                  0,
                );

                this.allMembers = members;
                this.topThree = this.allMembers.slice(0, 3);

                const highestStreakMember = [...members].sort((a, b) => b.streak - a.streak)[0];
                if (highestStreakMember) {
                  this.topStreakHolder = highestStreakMember.firstName;
                  this.topStreakDays = highestStreakMember.streak;
                }

                this.cdr.detectChanges();
              },
              (error) => {
                console.error('Firestore Error fetching members:', error);
              },
            );
          }
        } else {
          this.allMembers = [];
          this.topThree = [];
          this.totalChoresCompleted = 0;
          this.cdr.detectChanges();
        }
      },
      (error) => {
        console.error('Firestore Error fetching household:', error);
      },
    );
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isProfileMenuOpen) return;

    const target = event.target as HTMLElement | null;
    if (!target) return;

    if (!target.closest('.profile-menu-container')) {
      this.isProfileMenuOpen = false;
      this.cdr.detectChanges();
    }
  }

  private subscribeToUserPoints(uid: string) {
    if (this.pointsUnsubscribe) {
      this.pointsUnsubscribe();
    }

    const userDocRef = doc(this.firestore, `users/${uid}`);
    this.pointsUnsubscribe = onSnapshot(userDocRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        this.currentUserPoints = data['points'] ?? 0;
        this.currentUserName = data['display_name'] || null;
        this.cdr.detectChanges();
      }
    });
  }

  resetLeaderboard(): void {
    if (
      !confirm(
        'Are you sure you want to reset the leaderboard? This will wipe all points and chore counts to zero.',
      )
    ) {
      return;
    }

    this.isResetting = true;

    this.http.post('/api/household/reset-leaderboard/', {}).subscribe({
      next: () => {
        this.isResetting = false;
        this.showToast('Leaderboard reset successfully!', 'success');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Reset failed:', err);
        this.isResetting = false;
        this.showToast('Reset failed. Check the console for details.', 'error');
        this.cdr.detectChanges();
      },
    });
  }

  showToast(message: string, type: 'success' | 'error' = 'success'): void {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  async logout() {
    try {
      await this.auth.signOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  ngOnDestroy(): void {
    if (this.unsubscribeMembers) {
      this.unsubscribeMembers();
    }
    if (this.unsubscribeHousehold) {
      this.unsubscribeHousehold();
    }
    if (this.pointsUnsubscribe) {
      this.pointsUnsubscribe();
    }
    if (this.authUnsubscribe) {
      this.authUnsubscribe();
    }
  }

  private mapToHouseholdMember(data: any): HouseholdMember {
    const rawName = data.display_name || data.displayName || 'Unknown User';
    const nameParts = rawName.split(/[ ._]/);
    const first = nameParts[0];
    const last = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

    return {
      id: data.uid || data.id || '',
      firstName: first,
      lastName: last,
      initials: `${first.charAt(0)}${last ? last.charAt(0) : ''}`.toUpperCase(),
      points: data.points || 0,
      streak: data.streak || 0,
      totalTasksCompleted: data.total_tasks_completed || 0,
      statusBadge: null,
    };
  }
}
