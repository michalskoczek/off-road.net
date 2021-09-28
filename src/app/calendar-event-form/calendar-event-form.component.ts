import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../calendar/event.service';

@Component({
  selector: 'app-calendar-event-form',
  templateUrl: './calendar-event-form.component.html',
  styleUrls: ['./calendar-event-form.component.css'],
})
export class CalendarEventFormComponent implements OnInit {
  editMode = false;
  eventForm: FormGroup;
  index: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let eventName = '';
    let eventLocation = '';
    let eventDate = '';
    let eventType = '';
    let eventOrganizer = '';
    let eventCost = null;
    let eventDescription = '';

    if (this.editMode) {
      const event = this.eventService.getEvent(this.index);
      eventName = event.name;
      eventLocation = event.location;
      eventDate = event.date;
      eventType = event.type;
      eventOrganizer = event.organizer;
      eventCost = event.cost;
      eventDescription = event.description;
    }

    this.eventForm = new FormGroup({
      name: new FormControl(eventName),
      location: new FormControl(eventLocation),
      date: new FormControl(eventDate),
      type: new FormControl(eventType),
      organizer: new FormControl(eventOrganizer),
      cost: new FormControl(eventCost),
      description: new FormControl(eventDescription),
    });
  }

  onSubmit() {
    console.log(this.eventForm);
  }
}
