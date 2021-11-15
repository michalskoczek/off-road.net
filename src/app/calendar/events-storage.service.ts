import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from '../shared/event.model';

@Injectable({ providedIn: 'root' })
export class EventsStorageService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<{ [key: string]: Event }>(
      'https://off-road-net-default-rtdb.europe-west1.firebasedatabase.app/events.json'
    );
  }

  postEvent(eventSubmitted) {
    this.http
      .post<{ name: string }>(
        'https://off-road-net-default-rtdb.europe-west1.firebasedatabase.app/events.json',
        eventSubmitted
      )
      .subscribe((responseData) => console.log(responseData));
  }
}
