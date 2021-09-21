import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  path: string[];

  constructor(
    private optionsService: OptionsPanelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.options = this.optionsService.getOptions();
    this.buttons = this.optionsService.getButtons();
  }

  onMoveToCreateEvent() {
    this.router.navigate(['create-event'], { relativeTo: this.activatedRoute });
  }
}
