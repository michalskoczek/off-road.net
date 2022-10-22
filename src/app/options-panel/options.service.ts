import {Injectable} from '@angular/core';
import {AdminOptions, Options} from './options-panel.model';

@Injectable({providedIn: 'root'})
export class OptionsPanelService {
  private clientAndUserOptions: Options = {
    optionsName: {
      typeOfEvent: ['rajdy', 'wyprawy', 'turystyka', 'wyścigi'],
      placeOfEvent: [''],
    },
    eventOptionsName: {
      favourite: 'Dodaj do ulubionych',
      participation: ['Wezmę udział', 'Może', 'Nie wezmę udziału'],
    },
  };

  private adminOptions: AdminOptions = {
    optionsName: {
      typeOfEvent: ['rajdy', 'wyprawy', 'turystyka', 'wyścigi'],
      placeOfEvent: [''],
    },
    eventOptionsName: {
      favourite: 'Dodaj do ulubionych',
      participation: ['Wezmę udział', 'Może', 'Nie wezmę udziału'],
    },
    adminOptionsName: ['Nowe wydarzenie'],
    adminEventOptionsName: ['Edytuj', 'Usuń'],
  };

  getClientAndUserOptions() {
    return this.clientAndUserOptions.optionsName;
  }

  getClientAndUserEventOptions() {
    return this.clientAndUserOptions.eventOptionsName;
  }

  getAdminOptions() {
    return this.adminOptions.adminOptionsName;
  }

  getAdminEventOptions() {
    return this.adminOptions.adminEventOptionsName;
  }
}
