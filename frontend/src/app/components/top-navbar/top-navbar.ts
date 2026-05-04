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
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { TaskService } from '../../services/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-navbar.html',
  styleUrls: ['./top-navbar.css'],
})
export class TopNavbarComponent implements OnInit, OnDestroy {
  @Input() pageTitle = 'Dashboard';
  @Input() showResetButton = false;
  @Output() resetClicked = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();

  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private cdr = inject(ChangeDetectorRef);
  private taskService = inject(TaskService);

  currentUser: any = null;
  currentUserPoints = 0;
  currentUserName: string | null = null;
  isProfileMenuOpen = false;
  isResetting = false;

  tasksAssignedCount = 0;
  overdueCount = 0;

  private pointsUnsubscribe: (() => void) | null = null;
  private tasksSub: Subscription | null = null;

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;
      if (user) {
        this.subscribeToUserPoints(user.uid);
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

  private subscribeToUserPoints(uid: string): void {
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

  onReset(): void {
    this.resetClicked.emit();
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
  }
}
