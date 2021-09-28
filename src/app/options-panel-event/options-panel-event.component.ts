import { Component, Input, OnInit } from '@angular/core';

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

  constructor(private optionsService: OptionsPanelService) {}

  ngOnInit(): void {
    this.buttons = this.optionsService.getButtonsCalendarEvent();
    this.options = this.optionsService.getOptionsCalendarEvent();
  }
}
