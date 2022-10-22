import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { OptionsPanelService } from './options.service';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css'],
  providers: [OptionsPanelService],
})
export class OptionsPanelComponent implements OnInit {
  clientAndUserOptions: { typeOfEvent: string[]; placeOfEvent: string[] };
  adminOptions: string[];
  isLogin: boolean = false;

  constructor(
    private optionsService: OptionsPanelService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.clientAndUserOptions = this.optionsService.getClientAndUserOptions();
    this.adminOptions = this.optionsService.getAdminOptions();

    this.authService.user.subscribe(user => {
      if (user) {
        this.isLogin = !this.isLogin;
      }
    });
  }
}
