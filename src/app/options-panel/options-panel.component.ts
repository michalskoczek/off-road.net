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
  buttons: { routeName: string; buttonsName: string[] }[];

  constructor(private optionsService: OptionsPanelService) {}

  ngOnInit(): void {
    this.options = this.optionsService.getOptions();
    this.buttons = this.optionsService.getButtons();
  }
}
