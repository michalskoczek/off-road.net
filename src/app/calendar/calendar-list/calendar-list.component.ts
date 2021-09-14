import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/event.model';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  events: Event[] = [
    new Event(
      'Bałtowskie Bezdroża',
      'Świętokrzyskie',
      'Bałtów Dragon Which',
      'rajd',
      '07.09',
      'SB'
    ),
    new Event(
      'II rajd SUV-ów',
      'Mazowieckie',
      'Terenwizja',
      'rajd',
      '15.09',
      'NDZ'
    ),
    new Event('Wyrowisko', 'Łódzkie', 'Wyrowiskowy', 'wyprawa', '29.11', 'NDZ'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
