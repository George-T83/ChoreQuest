import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Firestore, collection, query, onSnapshot, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { LeaderboardService } from '../../services/leaderboard';

export interface HouseholdMember {
  id: string;
  firstName: string;
  lastName: string;
  initials: string;
  points: number;
  streak: number;
  totalTasksCompleted: number;
  statusBadge: 'MVP' | 'On fire' | 'You' | 'No activity' | null;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.html',
  styleUrls: ['./leaderboard.css'],
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  private firestore = inject(Firestore);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private auth = inject(Auth);
  private toastr = inject(ToastrService);
  private leaderboardService = inject(LeaderboardService);

  isAdmin = false;
  isResetting = false;
  currentUid = '';
  allMembers: HouseholdMember[] = [];
  topThree: HouseholdMember[] = [];

  totalChoresCompleted = 0;
  topStreakHolder = '';
  topStreakDays = 0;

  householdAdminId = '';

  private unsubscribeHousehold: (() => void) | null = null;
  private unsubscribeMembers: (() => void) | null = null;
  private authUnsubscribe: (() => void) | null = null;
  private resetUnsubscribe: Subscription | null = null;

  ngOnInit(): void {
    this.authUnsubscribe = this.auth.onAuthStateChanged((user) => {
      if (!user) {
        this.router.navigate(['/login']);
        return;
      }

      this.currentUid = user.uid;
      this.fetchLeaderboardData(user.uid);
      this.cdr.detectChanges();
    });

    this.resetUnsubscribe = this.leaderboardService.resetTriggered.subscribe(() => {
      if (this.isAdmin && !this.isResetting) {
        if (
          !confirm(
            'Are you absolutely sure? All member points will return to zero. This cannot be undone.',
          )
        )
          return;
        this.resetLeaderboard();
      }
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

                members.sort((a, b) => {
                  if (b.points !== a.points) return b.points - a.points;
                  if (b.streak !== a.streak) return b.streak - a.streak;
                  if (a.id === this.householdAdminId) return -1;
                  if (b.id === this.householdAdminId) return 1;
                  return 0;
                });

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

  resetLeaderboard(): void {
    this.isResetting = true;

    this.leaderboardService.resetLeaderboard().subscribe({
      next: () => {
        this.isResetting = false;
        this.toastr.success('Leaderboard reset successfully!', 'Reset complete', {
          enableHtml: true,
        });
        this.fetchLeaderboardData(this.currentUid);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Reset failed:', err);
        this.isResetting = false;
        this.toastr.error('Reset failed. Check the console for details.', 'Reset failed');
        this.cdr.detectChanges();
      },
    });
  }

  ngOnDestroy(): void {
    if (this.unsubscribeMembers) {
      this.unsubscribeMembers();
    }
    if (this.unsubscribeHousehold) {
      this.unsubscribeHousehold();
    }
    if (this.authUnsubscribe) {
      this.authUnsubscribe();
    }
    if (this.resetUnsubscribe) {
      this.resetUnsubscribe.unsubscribe();
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
