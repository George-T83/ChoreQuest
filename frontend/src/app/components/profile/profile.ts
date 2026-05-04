import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth';
import { HouseholdService } from '../../services/household';
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Badge, computeBadges, formatStreak } from '../../utils/badge';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private firestore = inject(Firestore);

  profileForm: FormGroup;
  private profileSub?: Subscription;
  private hhSub?: Subscription;
  private streakUnsub: (() => void) | null = null;
  private toastr = inject(ToastrService);

  private hasLoadedHouseholdOnce = false;
  private rankComputeSeq = 0;

  isLoading: boolean = true;
  currentDisplayName: string = '';
  initials: string = '';
  email: string = '';
  householdName: string = 'Loading...';
  totalPoints: number = 0;
  leaderboardRank: string = '—';
  currentStreak: number = 0;
  currentBadges: Badge[] = [];
  totalTasksCompleted: number = 0;
  isAdmin: boolean = false;
  currentUserUid: string = '';
  currentHousehold: any = null;
  showDeleteAccountModal: boolean = false;
  isDeletingAccount: boolean = false;
  deleteAccountErrorMsg: string = '';

  get streakDisplay(): string {
    return formatStreak(this.currentStreak);
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private householdService: HouseholdService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.profileForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {
    if (!this.hasLoadedHouseholdOnce && !this.householdService.currentHousehold) {
      this.hasLoadedHouseholdOnce = true;
      this.householdService.loadMyHousehold().subscribe();
    }

    this.profileSub = this.authService.getUserProfileStream().subscribe((data) => {
      if (data) {
        const nameFromDb = data.display_name || 'ChoreQuester';
        this.currentUserUid = data.uid;
        this.currentDisplayName = nameFromDb;
        this.initials = nameFromDb.charAt(0).toUpperCase();
        this.email = data.email;
        this.totalPoints = data.points || 0;

        if (!this.profileForm.dirty) {
          this.profileForm.patchValue({ displayName: nameFromDb });
        }

        this.isLoading = false;
        this.checkAdminStatus();
        this.subscribeToStreak(data.uid);
        this.refreshRank();
        this.cdr.detectChanges();
      } else {
        this.isLoading = false;
        this.leaderboardRank = '—';
        this.cdr.detectChanges();
      }
    });

    this.hhSub = this.householdService.household$.subscribe((hh) => {
      this.currentHousehold = hh;
      if (hh) {
        this.householdName = hh.name;
      } else {
        this.householdName = 'Not in a household';
        this.leaderboardRank = '—';
      }
      this.checkAdminStatus();
      this.refreshRank();
      this.cdr.detectChanges();
    });
  }

  private subscribeToStreak(uid: string): void {
    if (this.streakUnsub) this.streakUnsub();
    const userRef = doc(this.firestore, `users/${uid}`);
    this.streakUnsub = onSnapshot(userRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        this.currentStreak = data['streak'] ?? 0;
        this.totalTasksCompleted = data['total_tasks_completed'] ?? 0;
        this.totalPoints = data['points'] ?? this.totalPoints;
        this.currentBadges = computeBadges(this.totalTasksCompleted, this.totalPoints);
      }
      this.cdr.detectChanges();
    });
  }

  private refreshRank(): void {
    const uid = this.currentUserUid;
    const hh = this.currentHousehold;
    if (!uid) {
      this.leaderboardRank = '—';
      return;
    }
    if (!hh || !Array.isArray(hh.members)) {
      this.leaderboardRank = '—';
      return;
    }

    const memberIds = hh.members
      .map((m: any) => m?.id)
      .filter((id: unknown): id is string => typeof id === 'string' && id.length > 0);

    if (memberIds.length === 0) {
      this.leaderboardRank = '—';
      return;
    }
    void this.computeRank(memberIds);
  }

  private async computeRank(memberIds: string[]): Promise<void> {
    const seq = ++this.rankComputeSeq;
    if (!this.currentUserUid || memberIds.length === 0) {
      if (seq === this.rankComputeSeq) this.leaderboardRank = '—';
      return;
    }
    try {
      const usersRef = collection(this.firestore, 'users');
      const q = query(usersRef, where('uid', 'in', memberIds));
      const snap = await getDocs(q);
      if (seq !== this.rankComputeSeq) return;
      if (!this.currentHousehold) return;
      const members = snap.docs.map((d) => ({
        uid: d.data()['uid'] as string,
        points: (d.data()['points'] as number) || 0,
      }));
      members.sort((a, b) => b.points - a.points);
      const rank = members.findIndex((m) => m.uid === this.currentUserUid) + 1;
      this.leaderboardRank = rank > 0 ? `#${rank}` : '—';
    } catch {
      if (seq === this.rankComputeSeq) this.leaderboardRank = '—';
    }
    if (seq === this.rankComputeSeq) this.cdr.detectChanges();
  }

  private checkAdminStatus() {
    if (this.currentHousehold && this.currentUserUid) {
      this.isAdmin = this.currentHousehold.admin_id === this.currentUserUid;
    } else {
      this.isAdmin = false;
    }
  }

  onUpdateName(): void {
    if (this.profileForm.invalid) return;
    const newName = this.profileForm.value.displayName;
    this.authService.updateProfileName(newName).subscribe({
      next: () => {
        this.toastr.success('Your profile name has been updated.', 'Name Updated');
        this.profileForm.markAsPristine();
      },
      error: (err) => this.toastr.error(err.message, 'Update Failed'),
    });
  }

  onChangePassword(): void {
    if (!this.email) {
      this.toastr.error('No email address found for this account.', 'Error');
      return;
    }
    this.authService.sendPasswordReset(this.email).subscribe({
      next: () =>
        this.toastr.info('Check your inbox to reset your password.', '📩 Reset Email Sent'),
      error: (err) => this.toastr.error(err.message, 'Error'),
    });
  }

  onLogout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => this.toastr.error(err.message, 'Logout Failed'),
    });
  }

  onDeleteAccount(): void {
    if (this.isAdmin) {
      this.toastr.warning(
        'As the Admin, you must transfer ownership or dissolve the household before deleting your account.',
        '⚠️ Action Blocked',
        { timeOut: 6000 },
      );
      this.router.navigate(['/household-settings']);
      return;
    }
    this.deleteAccountErrorMsg = '';
    this.isDeletingAccount = false;
    this.showDeleteAccountModal = true;
    this.cdr.detectChanges();
  }

  closeDeleteAccountModal(): void {
    if (this.isDeletingAccount) return;
    this.showDeleteAccountModal = false;
    this.deleteAccountErrorMsg = '';
  }

  submitDeleteAccount(password: string): void {
    if (!password) {
      this.deleteAccountErrorMsg = 'Password is required.';
      this.cdr.detectChanges();
      return;
    }
    this.isDeletingAccount = true;
    this.deleteAccountErrorMsg = '';
    this.cdr.detectChanges();

    this.authService.deleteAccount(password).subscribe({
      next: () => {
        this.isDeletingAccount = false;
        this.showDeleteAccountModal = false;
        this.toastr.success('Your account has been permanently deleted.', '🗑️ Account Deleted');
        this.router.navigate(['/register']);
      },
      error: (err) => {
        this.isDeletingAccount = false;
        if (err.code === 'auth/invalid-credential') {
          this.deleteAccountErrorMsg = 'Incorrect password. Please try again.';
        } else if (err.code === 'auth/requires-recent-login') {
          this.deleteAccountErrorMsg =
            'Your session is too old. Please log out, log back in, and try again.';
        } else {
          this.deleteAccountErrorMsg = 'Error deleting account: ' + err.message;
        }
        this.cdr.detectChanges();
      },
    });
  }

  ngOnDestroy(): void {
    this.profileSub?.unsubscribe();
    this.hhSub?.unsubscribe();
    if (this.streakUnsub) this.streakUnsub();
  }
}
