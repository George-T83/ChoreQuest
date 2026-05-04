import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private resetSource = new Subject<void>();
  public resetTriggered = this.resetSource.asObservable();

  private viewHistorySource = new Subject<void>();
  public viewHistoryTriggered = this.viewHistorySource.asObservable();

  constructor(private http: HttpClient) {}

  triggerReset(): void {
    this.resetSource.next();
  }

  triggerViewHistory(): void {
    this.viewHistorySource.next();
  }

  resetLeaderboard() {
    return this.http.post('/api/household/reset-leaderboard/', {});
  }
}
