import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/event.model';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  @Input() event: Event;
  constructor() {}

  ngOnInit(): void {}
}
