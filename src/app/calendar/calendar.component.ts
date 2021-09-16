import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [EventService],
})
export class CalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
