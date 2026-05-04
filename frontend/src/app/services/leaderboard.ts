import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private resetTriggered$ = new Subject<void>();
  public resetTriggered = this.resetTriggered$.asObservable();

  constructor(private http: HttpClient) {}

  triggerReset(): void {
    this.resetTriggered$.next();
  }

  resetLeaderboard() {
    return this.http.post('/api/household/reset-leaderboard/', {});
  }
}
