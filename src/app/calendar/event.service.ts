import { Event } from '../shared/event.model';

export class EventService {
  private events: Event[] = [
    new Event(
      'Bałtowskie Bezdroża',
      'Świętokrzyskie',
      'Bałtów Dragon Which',
      'Rajd',
      '07.09',
      400,
      'Trudne zawody, ale spoko atmosfera',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg'
    ),
    new Event(
      'II rajd SUV-ów',
      'Mazowieckie',
      'Terenwizja',
      'Turystyka',
      '15.09',
      300,
      'Bedzie fajnie bo to terenwizja',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg'
    ),
    new Event(
      'Wyrowisko',
      'Łódzkie',
      'Wyrowiskowy',
      'Wyprawa',
      '29.11',
      600,
      'Drogo, ale błota od groma',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg'
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
