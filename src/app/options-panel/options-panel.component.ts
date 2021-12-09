import { Component, OnInit } from '@angular/core';

import { OptionsPanelService } from './options.service';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css'],
  providers: [OptionsPanelService],
})
export class OptionsPanelComponent implements OnInit {
  options: string[];
  buttons: string[];
  isLogin: boolean = true;

  constructor(private optionsService: OptionsPanelService) {}

  ngOnInit(): void {
    this.buttons = this.optionsService.getButtonsCalendar();
    this.options = this.optionsService.getOptionsCalendar();
  }
}
