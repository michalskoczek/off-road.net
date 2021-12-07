import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from '../../event.service';
import { Event } from '../../../shared/event.model';

@Component({
  selector: 'app-calendar-event-detail',
  templateUrl: './calendar-event-detail.component.html',
  styleUrls: ['./calendar-event-detail.component.css'],
})
export class CalendarEventDetailComponent implements OnInit {
  event: Event;
  id: number;
  participationElement: number[];
  isImage: boolean = false;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventService.setEvents(this.activatedRoute.snapshot.data.events);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.event = this.eventService.getEvent(this.id);
    });
  }

  onResetParticipation() {
    this.eventService.participation;
  }
}
