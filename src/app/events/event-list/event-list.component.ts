import { Component, OnInit } from '@angular/core';

import { Event } from '../../shared/event.module';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [
    new Event(
      'Wydarzenie 1',
      'Now Wydarzenie - opis',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg'
    ),
    new Event(
      'Wydarzenie 2',
      'Now Wydarzenie - opis',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg'
    ),
    new Event(
      'Wydarzenie 3',
      'Now Wydarzenie - opis',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
