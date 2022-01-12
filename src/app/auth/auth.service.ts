import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

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
  private _webApiKey: string = 'AIzaSyBOiZVG4Wl1mvp7qToawfnH7sO8xEKK4fs';
  private _signUpApiUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this._webApiKey}`;
  private _signInApiUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this._webApiKey}`;

  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(this._signUpApiUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  signin(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(this._signInApiUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Pojawił się nieznany błąd. Spróbuj ponownie.';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Podany adres email już widnieje w bazie.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Operacja niedozowolona.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Pojawił się nieznany błąd. Spróbuj później.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Podany adres email nie istnieje.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Niepoprawne hasło.';
        break;
      case 'USER_DISABLED':
        errorMessage = 'Użytkownik wyłączony przez administratora.';
        break;
      default:
        errorMessage = 'Pojawił się nieznany błąd. Spróbuj ponownie.';
        break;
    }
    return throwError(errorMessage);
  }
}
