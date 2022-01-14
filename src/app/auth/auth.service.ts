import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { webApiKey } from '../shared/private-properties';
import { Router } from '@angular/router';

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
  private _webApiKey: string = webApiKey;
  private _signUpApiUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this._webApiKey}`;
  private _signInApiUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this._webApiKey}`;

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(this._signUpApiUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthUser(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  signin(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(this._signInApiUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthUser(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
  }

  private handleAuthUser(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Pojawił się nieznany błąd. Spróbuj ponownie(1).';
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
