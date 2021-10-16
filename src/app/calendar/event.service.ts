import { Event } from '../shared/event.model';

export class EventService {
  private events: Event[] = [
    new Event(
      'Bałtowskie Bezdroża',
      'Świętokrzyskie',
      'Bałtów Dragon Which',
      'Rajd',
      '2021-09-23',
      400,
      'Trudne zawody, ale spoko atmosfera',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg',
      [3, 4, 5]
    ),
    new Event(
      'II rajd SUV-ów',
      'Mazowieckie',
      'Terenwizja',
      'Turystyka',
      '2021-09-15',
      300,
      'Bedzie fajnie bo to terenwizja',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg',
      [5, 10, 6]
    ),
    new Event(
      'Wyrowisko',
      'Łódzkie',
      'Wyrowiskowy',
      'Wyprawa',
      '2022-08-23',
      600,
      'Drogo, ale błota od groma',
      'https://cdn.pixabay.com/photo/2018/10/14/19/01/offroad-3747184_960_720.jpg',
      [3, 6, 9]
    ),
  ];

  private isParticipation: boolean[] = [false, false, false];

  get participation() {
    return (this.isParticipation = [false, false, false]);
  }

  getEvents() {
    return this.events.slice();
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
