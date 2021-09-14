import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css'],
})
export class OptionsPanelComponent implements OnInit {
  options: string[] = ['rajdy', 'wyprawy', 'turystyka', 'wyścigi'];
  buttons: string[] = ['Nowe wydarzenie', 'Lista wydarzeń'];

  constructor() {}

  ngOnInit(): void {}
}
