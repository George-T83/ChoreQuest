import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';
import {
  Firestore,
  doc,
  updateDoc,
  writeBatch,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HouseholdService } from '../../services/household';
import { LeaderboardService } from '../../services/leaderboard';
import { TaskService } from '../../services/task';
import { Household } from '../../models/household';

@Component({
  selector: 'app-household-settings',
  templateUrl: './household-settings.html',
  styleUrls: ['./household-settings.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
})
export class HouseholdSettingsComponent implements OnInit, OnDestroy {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private householdService = inject(HouseholdService);
  private leaderboardService = inject(LeaderboardService);
  private taskService = inject(TaskService);
  private toastr = inject(ToastrService);
  private cdr = inject(ChangeDetectorRef);

  // Household and User State
  household: Household | null = null;
  currentUserUid: string | null = null;
  editName: string = '';
  isLoading: boolean = true;

  // Transfer Ownership Modal State
  showTransferModal: boolean = false;
  selectedTransferMemberId: string = '';
  isTransferring: boolean = false;
  isTransferAndLeaveFlow: boolean = false;

  private authSub?: Subscription;
  private hhSub?: Subscription;
  private hasRequestedHouseholdLoad = false;

  ngOnInit(): void {
    this.isLoading = true;

    this.authSub = user(this.auth).subscribe((u) => {
      this.currentUserUid = u?.uid || null;

      if (!u) return;

      // Always request household data once we have an auth user.
      // This fixes refresh/race conditions on /household-settings.
      if (!this.hasRequestedHouseholdLoad && !this.householdService.currentHousehold) {
        this.hasRequestedHouseholdLoad = true;
        this.householdService.loadMyHousehold().subscribe({
          next: () => {
            this.isLoading = false;
            this.cdr.detectChanges();
          },
          error: (err) => {
            console.error('Failed to load household:', err);
            this.isLoading = false;
            this.cdr.detectChanges();
          },
        });
      } else if (this.householdService.currentHousehold) {
        // Household already in memory (e.g., navigation from another page)
        // — stop showing the loader.
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });

    this.hhSub = this.householdService.household$.subscribe((hh) => {
      this.household = hh;
      if (hh && !this.editName) {
        this.editName = hh.name;
      }
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
    this.hhSub?.unsubscribe();
  }

  get isAdmin(): boolean {
    return this.household?.admin_id === this.currentUserUid;
  }

  async leaveHousehold() {
    if (!this.household || !this.currentUserUid) return;

    if (this.isAdmin) {
      if (this.household.member_count <= 1) {
        if (
          !confirm(
            'You are the only member. Leaving will permanently delete this household and all household tasks will be lost. Continue?',
          )
        ) {
          return;
        }

        try {
          const hhRef = doc(this.firestore, `households/${this.household.id}`);
          await deleteDoc(hhRef);
          this.householdService.clearHousehold();
          this.taskService.clearTasks();
          this.toastr.success('Household dissolved and you have left successfully.', 'Success');
          this.router.navigate(['/dashboard']);
        } catch (error: any) {
          this.toastr.error('Error leaving household: ' + error.message, 'Error');
        }
        return;
      }

      this.isTransferAndLeaveFlow = true;
      this.selectedTransferMemberId = '';
      this.showTransferModal = true;
      this.cdr.detectChanges();
      return;
    }

    if (
      !confirm(
        'Are you sure you want to leave this household? You will lose access to all tasks and points.',
      )
    ) {
      return;
    }

    try {
      const batch = writeBatch(this.firestore);
      const hhRef = doc(this.firestore, `households/${this.household.id}`);
      const userRef = doc(this.firestore, `users/${this.currentUserUid}`);
      const membershipRef = doc(
        this.firestore,
        `households/${this.household.id}/memberships/${this.currentUserUid}`,
      );

      const updatedMembers = this.household.members.filter((m) => m.id !== this.currentUserUid);
      const updatedMemberIds = updatedMembers.map((m) => m.id);

      batch.update(hhRef, {
        members: updatedMemberIds,
        member_count: updatedMemberIds.length,
        is_full: false,
      });

      batch.update(userRef, { household_id: null, household_name: null, householdName: null });

      batch.delete(membershipRef);

      const tasksQuery = query(
        collection(this.firestore, `households/${this.household.id}/tasks`),
        where('assigned_to', '==', this.currentUserUid),
      );
      const taskSnaps = await getDocs(tasksQuery);
      taskSnaps.forEach((docSnap) => {
        if (docSnap.data()['status'] !== 'completed') {
          batch.update(docSnap.ref, {
            assigned_to: this.household!.admin_id,
          });
        }
      });

      await batch.commit();

      this.householdService.clearHousehold();
      this.taskService.clearTasks();
      this.toastr.success('You have successfully left the household.', 'Success');
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.toastr.error('Error leaving household: ' + error.message, 'Error');
    }
  }

  // Gets everyone in the household EXCEPT the current admin
  get eligibleTransferMembers() {
    return this.household?.members.filter((m) => m.id !== this.currentUserUid) || [];
  }

  // --- TRANSFER OWNERSHIP LOGIC ---
  openTransferModal() {
    if (this.eligibleTransferMembers.length === 0) {
      this.toastr.warning(
        'You are the only member in this household! Invite someone before transferring ownership.',
        'Cannot Transfer Ownership',
      );
      return;
    }
    this.isTransferAndLeaveFlow = false;
    this.selectedTransferMemberId = '';
    this.showTransferModal = true;
  }

  selectTransferMember(memberId: string) {
    this.selectedTransferMemberId = memberId;
  }

  closeTransferModal() {
    this.showTransferModal = false;
    this.selectedTransferMemberId = '';
    this.isTransferring = false;
    this.isTransferAndLeaveFlow = false;
    this.cdr.detectChanges();
  }

  get transferModalTitle(): string {
    return this.isTransferAndLeaveFlow ? 'Transfer Ownership and Leave' : 'Transfer Ownership';
  }

  get transferModalDescription(): string {
    if (this.isTransferAndLeaveFlow) {
      return 'Select a new Admin, then you will immediately be removed from this household.';
    }
    return 'Select a member to become the new Admin. You will instantly become a regular member.';
  }

  get transferConfirmButtonText(): string {
    if (this.isTransferAndLeaveFlow) {
      return this.isTransferring ? 'Leaving...' : 'Transfer and Leave';
    }
    return this.isTransferring ? 'Transferring...' : 'Confirm Transfer';
  }

  confirmTransfer() {
    if (!this.household || !this.selectedTransferMemberId) return;

    if (
      !confirm(
        'Are you entirely sure? You will lose Admin privileges immediately and cannot undo this.',
      )
    ) {
      return;
    }

    this.isTransferring = true;
    this.cdr.detectChanges();

    if (this.isTransferAndLeaveFlow && this.currentUserUid) {
      const runTransferAndLeave = async () => {
        try {
          const batch = writeBatch(this.firestore);
          const hhRef = doc(this.firestore, `households/${this.household!.id}`);
          const userRef = doc(this.firestore, `users/${this.currentUserUid}`);
          const membershipRef = doc(
            this.firestore,
            `households/${this.household!.id}/memberships/${this.currentUserUid}`,
          );

          const updatedMemberIds = this.household!.members.map((m) => m.id).filter(
            (id) => id !== this.currentUserUid,
          );

          batch.update(hhRef, {
            admin_id: this.selectedTransferMemberId,
            members: updatedMemberIds,
            member_count: updatedMemberIds.length,
            is_full: false,
          });
          batch.update(userRef, { household_id: null, household_name: null, householdName: null });
          batch.delete(membershipRef);

          const tasksQuery = query(
            collection(this.firestore, `households/${this.household!.id}/tasks`),
            where('assigned_to', '==', this.currentUserUid),
          );
          const taskSnaps = await getDocs(tasksQuery);
          taskSnaps.forEach((docSnap) => {
            if (docSnap.data()['status'] !== 'completed') {
              batch.update(docSnap.ref, {
                assigned_to: this.selectedTransferMemberId,
              });
            }
          });

          await batch.commit();

          this.closeTransferModal();
          this.householdService.clearHousehold();
          this.taskService.clearTasks();
          this.toastr.success('Ownership transferred and you have left the household.', 'Success');
          this.router.navigate(['/dashboard']);
        } catch (error: any) {
          this.isTransferring = false;
          this.cdr.detectChanges();
          this.toastr.error('Error transferring ownership and leaving: ' + error.message, 'Error');
        }
      };

      runTransferAndLeave();
      return;
    }

    const hhRef = doc(this.firestore, `households/${this.household.id}`);

    updateDoc(hhRef, { admin_id: this.selectedTransferMemberId }).catch((err: any) => {
      if (err.code === 'permission-denied') {
        console.warn('Post-transfer rule evaluation expected behavior:', err.message);
      } else {
        console.error('Unexpected error while transferring household admin:', err);
      }
    });

    setTimeout(() => {
      if (this.household) {
        this.household.admin_id = this.selectedTransferMemberId;
      }
      this.closeTransferModal();
    }, 500);
  }

  async saveName() {
    if (!this.household || !this.editName.trim()) return;
    try {
      const hhRef = doc(this.firestore, `households/${this.household.id}`);
      await updateDoc(hhRef, { name: this.editName.trim() });
      this.toastr.success('Household name updated successfully!', 'Success');
    } catch (error: any) {
      this.toastr.error('Error updating name: ' + error.message, 'Error');
    }
  }

  copyCode() {
    if (!this.household) return;
    navigator.clipboard.writeText(this.household.invite_code);
    this.toastr.info('Invite code copied to clipboard!', 'Copied');
  }

  async removeMember(memberId: string) {
    if (!this.household) return;
    if (memberId === this.household.admin_id) {
      this.toastr.warning('You cannot remove the Admin. You must transfer ownership or dissolve the household.', 'Cannot Remove Admin');
      return;
    }
    if (!confirm('Are you sure you want to remove this member from the household?')) return;

    try {
      const batch = writeBatch(this.firestore);
      const hhRef = doc(this.firestore, `households/${this.household.id}`);
      const userRef = doc(this.firestore, `users/${memberId}`);
      const membershipRef = doc(
        this.firestore,
        `households/${this.household.id}/memberships/${memberId}`,
      );

      const updatedMembers = this.household.members.filter((m) => m.id !== memberId);
      const updatedMemberIds = updatedMembers.map((m) => m.id);

      batch.update(hhRef, {
        members: updatedMemberIds,
        member_count: updatedMemberIds.length,
        is_full: false,
      });
      batch.update(userRef, { household_id: null, household_name: null, householdName: null });
      batch.delete(membershipRef);

      const tasksQuery = query(
        collection(this.firestore, `households/${this.household.id}/tasks`),
        where('assigned_to', '==', memberId),
      );
      const taskSnaps = await getDocs(tasksQuery);
      taskSnaps.forEach((docSnap) => {
        if (docSnap.data()['status'] !== 'completed') {
          batch.update(docSnap.ref, {
            assigned_to: this.household!.admin_id,
          });
        }
      });

      await batch.commit();

      this.household.members = updatedMembers;
      this.household.member_count = updatedMembers.length;
      this.cdr.detectChanges();
      this.toastr.success('Member removed successfully.', 'Success');
    } catch (error: any) {
      this.toastr.error('Error removing member: ' + error.message, 'Error');
    }
  }

  resetLeaderboard(): void {
    if (!this.household) return;
    if (
      !confirm(
        'Are you absolutely sure? All member points will return to zero. This cannot be undone.',
      )
    )
      return;

    this.leaderboardService.resetLeaderboard().subscribe({
      next: () => {
        this.toastr.success('Leaderboard reset successfully!', 'Reset complete', {
          enableHtml: true,
        });
      },
      error: (err) => {
        console.error('Reset failed:', err);
        this.toastr.error('Reset failed. Check the console for details.', 'Reset failed');
      },
    });
  }

  async dissolveHousehold() {
    if (!this.household) return;
    if (
      !confirm(
        'ARE YOU SURE? This will permanently delete this household and kick all members. This action cannot be undone.',
      )
    )
      return;

    try {
      const hhRef = doc(this.firestore, `households/${this.household.id}`);
      await deleteDoc(hhRef);
      this.householdService.clearHousehold();
      this.taskService.clearTasks();
      this.toastr.success('Household successfully dissolved.', 'Success');
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.toastr.error('Error dissolving household: ' + error.message, 'Error');
    }
  }
}
