import { Injectable } from '@angular/core';
import { Event } from '../shared/event.model';
import { EventsStorageService } from './events-storage.service';

@Injectable({ providedIn: 'root' })
export class EventService {
  constructor(private eventsStorageService: EventsStorageService) {}

  private events: Event[] = [];

  private isParticipation: boolean[] = [false, false, false];

  get participation() {
    return (this.isParticipation = [false, false, false]);
  }

  getSortedEvents() {
    return this.events.slice().sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  getEvent(index: number) {
    this.events = this.getSortedEvents();
    return this.events[index];
  }

  getEventParticipation(index: number) {
    this.events = this.getSortedEvents();
    return this.events[index].participation;
  }

  increaseParticipation(index: number, participationIndex: number) {
    this.events = this.getSortedEvents();
    const isFirstTime = this.isParticipation.find(
      (element) => element === true
    );
    if (isFirstTime === undefined) {
      this.isParticipation[participationIndex] = true;
      this.events[index].participation[participationIndex] += 1;
    } else if (
      isFirstTime &&
      this.isParticipation[participationIndex] === true
    ) {
      return;
    } else if (
      isFirstTime &&
      this.isParticipation[participationIndex] === false
    ) {
      const indexOfTrue = this.isParticipation.findIndex(
        (element) => element === true
      );
      this.isParticipation[indexOfTrue] = false;
      this.events[index].participation[indexOfTrue] -= 1;

      this.isParticipation[participationIndex] = true;
      this.events[index].participation[participationIndex] += 1;
    }
  }

  addEvent(event: Event) {
    this.events.push(event);
  }

  upgradeEvent(index: number, newEvent: Event) {
    this.events[index] = newEvent;
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
  }
}
