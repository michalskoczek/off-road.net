import { Options } from './options.enum';

export class OptionsPanelService {
  private options: {
    routeName: string;
    buttonsName: string[];
    optionsName: string[];
  }[] = [
    {
      routeName: 'calendar',
      buttonsName: ['Nowe wydarzenie', 'Lista wydarzeń'],
      optionsName: ['rajdy', 'wyprawy', 'turystyka', 'wyścigi'],
    },
    {
      routeName: 'event',
      buttonsName: ['Edytuj', 'Usuń'],
      optionsName: ['Wezmę udział', 'Może', 'Nie wezmę udziału'],
    },
  ];

  getOptions(url: string[]) {
    if (
      url[Options.Calendar] === 'calendar' &&
      url.length === Options.CalendarEvent
    ) {
      return this.options[Options.Calendar].optionsName.slice();
    } else if (
      url[Options.Calendar] === 'calendar' &&
      url[Options.CalendarEvent] === 'event'
    ) {
      return this.options[Options.CalendarEvent].optionsName.slice();
    }
  }

  getButtons(url) {
    if (
      url[Options.Calendar] === 'calendar' &&
      url.length === Options.CalendarEvent
    ) {
      return this.options[Options.Calendar].buttonsName.slice();
    } else if (
      url[Options.Calendar] === 'calendar' &&
      url[Options.CalendarEvent] === 'event'
    ) {
      return this.options[Options.CalendarEvent].buttonsName.slice();
    }
  }
}
