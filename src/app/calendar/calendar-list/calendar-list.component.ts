import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/event.model';
import { EventService } from '../event.service';
import { EventsStorageService } from '../events-storage.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  events: Event[];
  isFetching: boolean = false;

  constructor(
    private eventService: EventService,
    private eventsStorageService: EventsStorageService
  ) {}

  ngOnInit(): void {
    this.showEvents();
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

  private showEvents() {
    this.isFetching = true;
    this.eventsStorageService.getEvents().subscribe((events) => {
      this.isFetching = false;
      this.events = this.eventService.sortEvents(events);
    });
  }
}
