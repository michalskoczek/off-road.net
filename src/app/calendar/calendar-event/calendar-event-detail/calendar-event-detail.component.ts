import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from '../../event.service';
import { Event } from '../../../shared/event.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar-event-detail',
  templateUrl: './calendar-event-detail.component.html',
  styleUrls: ['./calendar-event-detail.component.css'],
})
export class CalendarEventDetailComponent implements OnInit, OnDestroy {
  event: Event;
  id: number;
  subscription: Subscription;
  participationElement: number[];

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.event = this.eventService.getEvent(this.id);
        this.participationElement = this.eventService.getEventParticipation(
          this.id
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onResetParticipation() {
    this.eventService.participation;
  }
}
