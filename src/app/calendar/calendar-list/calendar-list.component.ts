import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getSortedEvents();
  }

  displayDate(date) {
    // return date.split('-').reverse().slice(0, -1).join('.');
    // const options = {
    //   weekday: 'long',
    //   month: 'numeric',
    //   day: 'numeric',
    // };
    // const datecopy = date.toLocaleString('pl-PL', options);
    // console.log(datecopy);

    const days = new Intl.DateTimeFormat('pl-PL', {
      month: 'numeric',
      day: 'numeric',
    }).format(date);

    console.log(days);
    return days;
  }

  displayDay(date) {
    const day = new Intl.DateTimeFormat('pl-PL', { weekday: 'long' }).format(
      date
    );
    console.log(day);
    switch (day) {
      case 'poniedziałek':
        return 'PON';
      case 'wtorek':
        return 'WT';
      case 'środa':
        return 'ŚR';
      case 'czwartek':
        return 'CZW';
      case 'piątek':
        return 'PT';
      case 'sobota':
        return 'SOB';
      case 'niedziela':
        return 'NDZ';
      default:
        break;
    }
  }
}
