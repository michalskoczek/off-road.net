import { Options } from './options.enum';

export class OptionsPanelService {
  private options: { buttonsName: string[]; optionsName: string[] }[] = [
    {
      buttonsName: ['Nowe wydarzenie', 'Lista wydarzeń'],
      optionsName: ['rajdy', 'wyprawy', 'turystyka', 'wyścigi'],
    },
    {
      buttonsName: ['Edytuj', 'Usuń'],
      optionsName: ['Wezmę udział', 'Może', 'Nie wezmę udziału'],
    },
  ];

  getOptionsCalendar() {
    return this.options[Options.Calendar].optionsName.slice();
  }

  getButtonsCalendar() {
    return this.options[Options.Calendar].buttonsName.slice();
  }

  getOptionsCalendarEvent() {
    return this.options[Options.CalendarEvent].optionsName.slice();
  }

  getButtonsCalendarEvent() {
    return this.options[Options.CalendarEvent].buttonsName.slice();
  }
}
