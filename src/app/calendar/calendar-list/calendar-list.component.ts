import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/event.model';
import { EventService } from '../event.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  events: Event[];
  isFetching: boolean = false;

  constructor(private eventService: EventService, private http: HttpClient) {}

  ngOnInit(): void {
    //this.events = this.eventService.getSortedEvents();
    this.getEvents();
  }

  displayMonths(event: Event, index) {
    if (index === 0) {
      return true;
    } else if (index > 0) {
      return Number(this.events[index].date.split('-')[1]) !=
        Number(this.events[index - 1].date.split('-')[1])
        ? true
        : false;
    }
  }
}
