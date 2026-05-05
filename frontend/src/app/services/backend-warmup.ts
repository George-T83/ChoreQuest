import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BackendWarmupService {
  private readonly http = inject(HttpClient);

  warmupBackend(): void {
    const healthUrl = `${environment.apiUrl}/health`;
    this.http.get(healthUrl, { responseType: 'text' }).subscribe(
      () => console.log('Backend warmed up'),
      (err) => console.debug('Warmup request (expected to fail):', err),
    );
  }
}
