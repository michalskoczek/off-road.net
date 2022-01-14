import { HttpClient, HttpParams, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

import { Event } from '../shared/event.model';

@Injectable({ providedIn: 'root' })
export class EventsStorageService {
  private eventsUrl: string =
    'https://off-road-net-default-rtdb.europe-west1.firebasedatabase.app/events.json';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  getEvents(): Observable<Event[]> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<{ [key: string]: Event }>(this.eventsUrl, {
          params: new HttpParams().set('auth', user.token),
        });
      }),
      map((responseData) => {
        const eventsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            eventsArray.push({ ...responseData[key], id: key });
          }
        }
        return eventsArray;
      }),
      catchError((error) => {
        this.router.navigateByUrl('/error');
        return EMPTY;
      })
    );
  }

  postEvent(eventSubmitted): Observable<{ name: string }> {
    return this.http
      .post<{ name: string }>(this.eventsUrl, eventSubmitted)
      .pipe(
        tap((data) => console.log(data)),
        catchError((error) => {
          this.router.navigateByUrl('/error');
          return EMPTY;
        })
      );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof HttpResponseBase) {
      errorMessage = `An error occurred: ${err.error.error}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.statusText}`;
    }
    return throwError(errorMessage);
  }
}
