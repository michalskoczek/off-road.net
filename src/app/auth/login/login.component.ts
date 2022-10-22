import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css'],
})
export class LoginComponent {
  isLoading: boolean = false;
  error: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    this.authService.signin(email, password).subscribe({
      next: res => {
        this.isLoading = false;
        this.router.navigate(['/calendar']);
      },
      error: errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      },
    });

    form.reset();
  }
}
