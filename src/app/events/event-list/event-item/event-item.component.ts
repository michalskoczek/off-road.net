import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Event } from '../../../shared/event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  @Input() eventItem: Event;
  @Output() featureSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.featureSelected.emit();
  }
}
