import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
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
