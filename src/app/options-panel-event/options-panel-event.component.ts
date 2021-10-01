import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EventService } from '../calendar/event.service';
import { OptionsPanelService } from '../options-panel/options.service';

@Component({
  selector: 'app-options-panel-event',
  templateUrl: './options-panel-event.component.html',
  styleUrls: ['./options-panel-event.component.css'],
  providers: [OptionsPanelService],
})
export class OptionsPanelEventComponent implements OnInit {
  buttons: string[];
  options: string[];
  index: number;

  constructor(
    private optionsService: OptionsPanelService,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buttons = this.optionsService.getButtonsCalendarEvent();
    this.options = this.optionsService.getOptionsCalendarEvent();
  }

  onDeleteEvent() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = +params['id'];
    });
    this.eventService.deleteEvent(this.index);
    this.router.navigateByUrl('calendar');
  }
}
