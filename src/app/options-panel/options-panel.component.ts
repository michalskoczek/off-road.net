import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FilterPipe } from '../filter.pipe';

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
  filterPipe = new Subject<string>();

  constructor(
    private optionsService: OptionsPanelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buttons = this.optionsService.getButtonsCalendar();
    this.options = this.optionsService.getOptionsCalendar();
  }

  // onFilterEvents(buttonName) {
  //   console.log(buttonName.target.innerText);
  //   switch (buttonName.target.innerText) {
  //     case 'rajdy':
  //       break;
  //     case 'wyprawy':
  //       break;
  //     case 'turystyka':
  //       break;
  //     case 'wyścigi':
  //       break;

  //     default:
  //       break;
  //   }
  // }

  onFilterEvents(buttonName) {
    this.filterPipe.next(buttonName.target.innerText);
  }
}
