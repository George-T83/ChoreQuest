import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, query, onSnapshot, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { LeaderboardHistoryComponent } from '../leaderboard-history/leaderboard-history';
import { LeaderboardService } from '../../services/leaderboard';
import { HouseholdService } from '../../services/household';
import { Subscription } from 'rxjs';
import { Badge, computeBadges, formatStreak } from '../../utils/badge';

export interface HouseholdMember {
  id: string;
  firstName: string;
  lastName: string;
  initials: string;
  points: number;
  streak: number;
  streakDisplay: string;
  totalTasksCompleted: number;
  statusBadge: 'MVP' | 'On fire' | 'You' | 'No activity' | null;
  badges: Badge[];
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, LeaderboardHistoryComponent],
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
  private householdService = inject(HouseholdService);

  isAdmin = false;
  isResetting = false;
  isHistoryModalOpen = false;
  currentHouseholdId = '';

  currentUid = '';
  allMembers: HouseholdMember[] = [];
  topThree: HouseholdMember[] = [];

  totalChoresCompleted = 0;
  topStreakHolder = '';
  topStreakDays = 0;

  householdAdminId = '';

  private householdSub: Subscription | null = null;
  private authUnsubscribe: (() => void) | null = null;

  onViewHistory() {
    this.isHistoryModalOpen = true;
  }

  closeHistoryModal() {
    this.isHistoryModalOpen = false;
  }

  onResetClicked(): void {
    if (!confirm('Are you sure you want to reset all points? This cannot be undone.')) return;

    this.isResetting = true;

    this.leaderboardService.resetLeaderboard().subscribe({
      next: (response: any) => {
        this.isResetting = false;

        if (response.cycle_saved) {
          this.toastr.success(
            `${response.winner_name} wins this cycle with ${response.winner_points} pts!`,
            'Leaderboard Reset! 🏆',
          );
        } else {
          this.toastr.success('Points and tasks have been reset to zero.', 'Reset Complete');
        }

        this.householdService.loadMyHousehold().subscribe();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        this.isResetting = false;
        this.toastr.error(err.error?.detail ?? 'Failed to reset leaderboard.', 'Error');
        this.cdr.detectChanges();
      },
    });
  }

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
  }

  fetchLeaderboardData(uid: string): void {
    if (this.householdSub) {
      this.householdSub.unsubscribe();
    }

    this.householdService.loadMyHousehold().subscribe();

    this.householdSub = this.householdService.household$.subscribe((household) => {
      if (household) {
        this.currentHouseholdId = household.id;
        this.householdAdminId = household.admin_id;
        this.isAdmin = this.currentUid === this.householdAdminId;

        const members = (household.members || []).map(m => this.mapToHouseholdMember(m));

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
      } else {
        this.allMembers = [];
        this.topThree = [];
        this.totalChoresCompleted = 0;
      }
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.householdSub) this.householdSub.unsubscribe();
    if (this.authUnsubscribe) this.authUnsubscribe();
  }

  private mapToHouseholdMember(data: any): HouseholdMember {
    const rawName = data.display_name || data.displayName || 'Unknown User';
    const nameParts = rawName.split(/[ ._]/);
    const first = nameParts[0];
    const last = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
    const streak = data.streak || 0;
    const points = data.points || 0;
    const totalTasksCompleted = data.total_tasks_completed || 0;

    return {
      id: data.uid || data.id || '',
      firstName: first,
      lastName: last,
      initials: `${first.charAt(0)}${last ? last.charAt(0) : ''}`.toUpperCase(),
      points,
      streak,
      streakDisplay: formatStreak(streak),
      totalTasksCompleted,
      statusBadge: null,
      badges: computeBadges(totalTasksCompleted, points),
    };
  }
}
