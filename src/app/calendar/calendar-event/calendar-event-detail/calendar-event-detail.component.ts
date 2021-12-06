import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from '../../event.service';
import { Event } from '../../../shared/event.model';
import { Subscription } from 'rxjs';
import { EventsStorageService } from '../../events-storage.service';

@Component({
  selector: 'app-calendar-event-detail',
  templateUrl: './calendar-event-detail.component.html',
  styleUrls: ['./calendar-event-detail.component.css'],
})
export class CalendarEventDetailComponent implements OnInit {
  event: any;
  id: number;
  subscription: Subscription;
  participationElement: number[];

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private eventsStorageService: EventsStorageService
  ) {}

  ngOnInit(): void {
    // this.subscription = this.activatedRoute.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     this.event = this.eventService.getEvent(this.id);
    //     this.event = this.eventsStorageService.getEvent()
    //     this.participationElement = this.eventService.getEventParticipation(
    //       this.id
    //     );
    //   }
    // );

    this.event = this.activatedRoute.snapshot.data.event;
    console.log(this.event)
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  onResetParticipation() {
    this.eventService.participation;
  }
}
