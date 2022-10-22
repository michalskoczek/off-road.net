import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

import { EventService } from '../calendar/event.service';
import { OptionsPanelService } from '../options-panel/options.service';

@Component({
  selector: 'app-options-panel-event',
  templateUrl: './options-panel-event.component.html',
  styleUrls: ['../options-panel/options-panel.component.css'],
  providers: [OptionsPanelService],
})
export class OptionsPanelEventComponent implements OnInit {
  eventOptions!: { favourite: string; participation: string[] };
  adminEventOptions!: string[];
  index!: number;
  isLogin: boolean = false;
  isAdminLogin: boolean = false;

  constructor(
    private optionsService: OptionsPanelService,
    private eventService: EventService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventOptions = this.optionsService.getClientAndUserEventOptions();
    this.adminEventOptions = this.optionsService.getAdminEventOptions();

    this.authService.user.subscribe(user => {
      if (user) {
        this.isLogin = !this.isLogin;
      }
    });
  }

  onAddToFavourite() {
    console.log('Dodany do ulubionych');
  }

  onDeleteEvent() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = +params['id'];
    });
    this.eventService.deleteEvent(this.index);
    this.router.navigateByUrl('calendar');
  }

  onIncreaseParticipation(participationIndex: number) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = +params['id'];
    });
    this.eventService.increaseParticipation(this.index, participationIndex);
  }
}
