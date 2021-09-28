import { Event } from '../shared/event.model';

export class EventService {
  private events: Event[] = [
    new Event(
      'Bałtowskie Bezdroża',
      'Świętokrzyskie',
      'Bałtów Dragon Which',
      'rajd',
      '07.09',
      'SB',
      400,
      'Trudne zawody, ale spoko atmosfera'
    ),
    new Event(
      'II rajd SUV-ów',
      'Mazowieckie',
      'Terenwizja',
      'rajd',
      '15.09',
      'NDZ',
      300,
      'Bedzie fajnie bo to terenwizja'
    ),
    new Event(
      'Wyrowisko',
      'Łódzkie',
      'Wyrowiskowy',
      'wyprawa',
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

  getRallyRace() {
    return this.events.filter((event: Event) => event[3] === 'rajd');
  }
}
