import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  // Wakes Angular up when Firebase returns an error
  private readonly cdr = inject(ChangeDetectorRef);

  form!: FormGroup;
  loading = false;
  errorMsg = '';

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        // 1. The Email Field (with the strict pattern we just added)
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
          ],
        ],

        // 2. The Password Field
        password: ['', [Validators.required, Validators.minLength(6)]],

        // 3. The Confirm Password Field
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordsMatchValidator },
    );
  }

  // --- GETTERS ---
  get emailCtrl() {
    return this.form.get('email')!;
  }

  get passCtrl() {
    return this.form.get('password')!;
  }

  get confirmCtrl() {
    return this.form.get('confirmPassword')!;
  }

  passwordsMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    this.authService.register(this.emailCtrl.value, this.passCtrl.value).subscribe({
      next: () => {
        this.loading = false;

        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;

        // Catch specific Firebase errors
        if (err.code === 'auth/email-already-in-use') {
          this.errorMsg = 'This email is already registered. Please log in.';
        } else {
          this.errorMsg = err.message || 'Registration failed. Please try again.';
        }

        console.error('Registration error:', err);

        // Force Angular to update the UI and remove the loading spinner
        this.cdr.detectChanges();
      },
    });
  }
}
