import { Event } from '../shared/event.model';

export class EventService {
  private events: Event[] = [
    new Event(
      'Bałtowskie Bezdroża',
      'Świętokrzyskie',
      'Bałtów Dragon Which',
      'rally',
      '07.09',
      'SB',
      400,
      'Trudne zawody, ale spoko atmosfera'
    ),
    new Event(
      'II rajd SUV-ów',
      'Mazowieckie',
      'Terenwizja',
      'tourism',
      '15.09',
      'NDZ',
      300,
      'Bedzie fajnie bo to terenwizja'
    ),
    new Event(
      'Wyrowisko',
      'Łódzkie',
      'Wyrowiskowy',
      'expedition',
      '29.11',
      'NDZ',
      600,
      'Drogo, ale błota od groma'
    ),
  ];

  getEvents() {
    return this.events.slice();
  }

  getEvent(index: number) {
    return this.events[index];
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
