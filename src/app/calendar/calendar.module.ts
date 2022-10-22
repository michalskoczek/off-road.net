import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {CalendarRoutingModule} from './calendar-routing.module';
import {CalendarComponent} from './calendar.component';
import {CalendarListComponent} from './calendar-list/calendar-list.component';
import {CalendarEventComponent} from './calendar-event/calendar-event.component';
import {CalendarEventFormComponent} from '../calendar-event-form/calendar-event-form.component';
import {CalendarEventDetailComponent} from './calendar-event/calendar-event-detail/calendar-event-detail.component';
import {OptionsPanelComponent} from '../options-panel/options-panel.component';
import {OptionsPanelEventComponent} from '../options-panel-event/options-panel-event.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarListComponent,
    CalendarEventComponent,
    CalendarEventFormComponent,
    CalendarEventDetailComponent,
    OptionsPanelComponent,
    OptionsPanelEventComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarRoutingModule,
    SharedModule,
  ],
})
export class CalendarModule {}
