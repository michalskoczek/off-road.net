import { Event } from '../shared/event.model';

export class EventService {
  private events: Event[] = [
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

  getEvents() {
    return this.events.slice();
  }

  getRallyRace() {
    return this.events.filter((event: Event) => event[3] === 'rajd');
  }
}
