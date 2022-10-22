import { Component } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [EventService],
})
export class CalendarComponent {}
