import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, inject, Injector, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http'; 
import { Firestore, collection, query, onSnapshot, where } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth';

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
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);
  private injector = inject(Injector);
  private http = inject(HttpClient);

  isAdmin = false;
  isResetting = false;
  activeCycle: 'Weekly' | 'Monthly' | 'All time' = 'Weekly';
  allMembers: HouseholdMember[] = [];
  topThree: HouseholdMember[] = [];
  
  totalChoresCompleted = 0; // Changed from 35 to 0
  topStreakHolder = '';
  topStreakDays = 0;

  private unsubscribeHousehold: (() => void) | null = null;
  private unsubscribeMembers: (() => void) | null = null;

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.authService.getUserProfileStream().subscribe((user: any) => {
        this.isAdmin = user?.role === 'admin';
        const uid = user?.uid; 
        
        if (uid) {
          this.fetchLeaderboardData(uid);
        }
        this.cdr.detectChanges();
      });
    });
  }

  fetchLeaderboardData(uid: string): void {
    if (this.unsubscribeHousehold) {
      this.unsubscribeHousehold();
    }

    const householdsRef = collection(this.firestore, 'households');
    const householdQuery = query(householdsRef, where('members', 'array-contains', uid));
    
    this.unsubscribeHousehold = onSnapshot(householdQuery, (hSnap) => {
      if (!hSnap.empty) {
        const householdData = hSnap.docs[0].data();
        const memberUids = householdData['members'] || [];

        if (memberUids.length > 0) {
          const usersRef = collection(this.firestore, 'users');
          const usersInHouseholdQuery = query(usersRef, where('uid', 'in', memberUids));

          if (this.unsubscribeMembers) {
            this.unsubscribeMembers();
          }

          this.unsubscribeMembers = onSnapshot(usersInHouseholdQuery, (uSnap) => {
            const members: HouseholdMember[] = [];
            
            uSnap.forEach((docSnap) => {
              const data = docSnap.data();
              data['id'] = docSnap.id;
              members.push(this.mapToHouseholdMember(data));
            });

            members.sort((a, b) => b.points - a.points);

            // Dynamically sum up the new backend variable for every roommate
            this.totalChoresCompleted = members.reduce((sum, member) => sum + member.totalTasksCompleted, 0);

            this.allMembers = members;
            this.topThree = this.allMembers.slice(0, 3);
            
            const highestStreakMember = [...members].sort((a, b) => b.streak - a.streak)[0];
            if (highestStreakMember) {
              this.topStreakHolder = highestStreakMember.firstName;
              this.topStreakDays = highestStreakMember.streak;
            }

            this.cdr.detectChanges();
          }, (error) => {
            console.error("Firestore Error fetching members:", error);
          });
        }
      } else {
        this.allMembers = [];
        this.topThree = [];
        this.totalChoresCompleted = 0;
        this.cdr.detectChanges();
      }
    }, (error) => {
      console.error("Firestore Error fetching household:", error);
    });
  }

  resetLeaderboard(): void {
    if (!confirm('Are you sure you want to reset the leaderboard? This will wipe all points and chore counts to zero.')) {
      return;
    }

    this.isResetting = true;

    this.http.post('/api/household/reset-leaderboard/', {}).subscribe({
      next: () => {
        this.isResetting = false;
        // The onSnapshot listener will automatically detect the backend changes and redraw the screen!
      },
      error: (err) => {
        console.error('Reset failed:', err);
        this.isResetting = false;
        alert('Reset failed. Check the console for details.');
      }
    });
  }

  onCycleChanged(cycle: any): void {
    this.activeCycle = cycle;
  }

  ngOnDestroy(): void {
    if (this.unsubscribeMembers) {
      this.unsubscribeMembers();
    }
    if (this.unsubscribeHousehold) {
      this.unsubscribeHousehold();
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
      totalTasksCompleted: data.total_tasks_completed || 0, // Maps the backend data
      statusBadge: data.statusBadge || null
    };
  }
}