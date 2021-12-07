import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventsStorageService } from '../events-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarListResolver implements Resolve<Event[]> {
  constructor(private eventStorageService: EventsStorageService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Event[]> | Promise<Event[]> | Event[] {
    return this.eventStorageService.getEvents();
  }
}
