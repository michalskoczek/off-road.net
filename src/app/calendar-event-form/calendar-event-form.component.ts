import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../calendar/event.service';
import { Event } from '../shared/event.model';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-calendar-event-form',
  templateUrl: './calendar-event-form.component.html',
  styleUrls: ['./calendar-event-form.component.css'],
})
export class CalendarEventFormComponent
  implements OnInit, CanComponentDeactivate
{
  formTitle: string;
  btnFormTitle: string;
  editMode = false;
  eventForm: FormGroup;
  index: number;
  changesSaved: boolean = false;
  defaultParticipationValue: number[] = [0, 0, 0];

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
    private http: HttpClient
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
    let eventDate = null;
    let eventType = '';
    let eventOrganizer = '';
    let eventCost = null;
    let eventDescription = '';
    let eventImage = '';

    if (this.editMode) {
      this.formTitle = 'Edytuj wydarzenie';
      this.btnFormTitle = 'Zaktualizuj wydarzenie';
      const event = this.eventService.getEvent(this.index);
      eventName = event.name;
      eventLocation = event.location;
      eventDate = event.date;
      eventType = event.type;
      eventOrganizer = event.organizer;
      eventCost = event.cost;
      eventDescription = event.description;
      eventImage = event.image;
    } else {
      this.formTitle = 'Nowe wydarzenie';
      this.btnFormTitle = 'Dodaj wydarzenie';
    }

    this.eventForm = new FormGroup({
      name: new FormControl(eventName, Validators.required),
      organizer: new FormControl(eventOrganizer, Validators.required),
      date: new FormControl(eventDate, Validators.required),
      type: new FormControl(eventType, Validators.required),
      location: new FormControl(eventLocation, Validators.required),
      cost: new FormControl(eventCost, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      description: new FormControl(eventDescription, Validators.required),
      image: new FormControl(eventImage),
    });
  }

  onSubmit() {
    const eventSubmitted: Event = new Event(
      this.eventForm.value.name,
      this.eventForm.value.location,
      this.eventForm.value.organizer,
      this.eventForm.value.type,
      this.eventForm.value.date,
      this.eventForm.value.cost,
      this.eventForm.value.description,
      this.eventForm.value.image,
      this.defaultParticipationValue
    );
    if (this.editMode) {
      eventSubmitted.participation = this.eventService.getEventParticipation(
        this.index
      );
      this.eventService.upgradeEvent(this.index, eventSubmitted);
      this.changesSaved = true;
    } else {
      this.eventService.addEvent(eventSubmitted);
    }
    this.router.navigateByUrl('/calendar');
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.editMode) {
      return true;
    }
    if (
      (this.eventService.getEvent(this.index).name !==
        this.eventForm.value.name ||
        this.eventService.getEvent(this.index).location !==
          this.eventForm.value.location ||
        this.eventService.getEvent(this.index).organizer !==
          this.eventForm.value.organizer ||
        this.eventService.getEvent(this.index).type !==
          this.eventForm.value.type ||
        this.eventService.getEvent(this.index).date !==
          this.eventForm.value.date ||
        this.eventService.getEvent(this.index).cost !==
          this.eventForm.value.cost ||
        this.eventService.getEvent(this.index).description !==
          this.eventForm.value.description ||
        this.eventService.getEvent(this.index).image !==
          this.eventForm.value.image) &&
      !this.changesSaved
    ) {
      return confirm('Czy chcesz odrzucić wprowadzone zmiany?');
    } else {
      return true;
    }
  }
}
