import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private webApiKey: string = 'AIzaSyBOiZVG4Wl1mvp7qToawfnH7sO8xEKK4fs';
  private signupApiUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.webApiKey}`;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.signupApiUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
