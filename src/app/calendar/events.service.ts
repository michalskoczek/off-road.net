import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(private http: HttpClient) {}

  postEvent(eventSubmitted) {
    this.http
      .post<{ name: string }>(
        'https://off-road-net-default-rtdb.europe-west1.firebasedatabase.app/events.json',
        eventSubmitted
      )
      .subscribe((responseData) => console.log(responseData));
  }
}
