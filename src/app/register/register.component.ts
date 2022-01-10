import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.valid);

    if (!form.valid) return;

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    this.authService.signup(email, password).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
