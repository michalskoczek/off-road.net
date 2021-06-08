import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  selectedEvent: Event;
  constructor() {}

  ngOnInit(): void {}
}
