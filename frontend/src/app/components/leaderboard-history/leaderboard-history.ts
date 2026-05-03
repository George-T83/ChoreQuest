import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, query, orderBy, getDocs } from '@angular/fire/firestore';

export interface CycleHistory {
  id: string;
  cycle_end_date: any;
  winner_uid: string;
  winner_name: string;
  winner_points: number;
  standings: { uid: string; name: string; points: number }[];
}

@Component({
  selector: 'app-leaderboard-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard-history.html',
  styleUrls: ['./leaderboard-history.css'],
})
export class LeaderboardHistoryComponent implements OnInit {
  @Input() householdId!: string;
  @Output() closed = new EventEmitter<void>();

  private firestore = inject(Firestore);

  history: CycleHistory[] = [];
  loading = true;
  errorMsg = '';

  ngOnInit(): void {
    this.loadHistory();
  }

  async loadHistory(): Promise<void> {
    try {
      const historyRef = collection(
        this.firestore,
        `households/${this.householdId}/history`
      );
      const q = query(historyRef, orderBy('cycle_end_date', 'desc'));
      const snapshot = await getDocs(q);

      this.history = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as CycleHistory[];
    } catch (err) {
      this.errorMsg = 'Failed to load history. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  formatDate(timestamp: any): string {
    if (!timestamp) return 'Unknown date';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  close(): void {
    this.closed.emit();
  }
}
