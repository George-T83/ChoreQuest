import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  form!: FormGroup;
  loading = false;
  errorMsg = '';

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          // Updated to the strict pattern to match the register page
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  get emailCtrl() {
    return this.form.get('email')!;
  }
  get passCtrl() {
    return this.form.get('password')!;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    this.authService.login(this.emailCtrl.value, this.passCtrl.value).subscribe({
      next: () => {
        this.loading = false; // Turn off spinner
        alert('Test successful! User was logged in to Firebase.'); //Placeholder notification.

        // Updated route: navigates to the dashboard upon a successful login.
        this.router.navigate(['/login']); // /login is just a placeholder. You can change it to any route you want to navigate to after login.
      },
      error: (err) => {
        this.loading = false; // Turn off spinner on error
        this.errorMsg = 'Invalid email or password. Please try again.';
        console.error('Login error:', err);
        this.cdr.detectChanges(); // Force UI update
      },
    });
  }
}
