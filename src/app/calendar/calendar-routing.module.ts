import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarEventFormComponent } from '../calendar-event-form/calendar-event-form.component';
import { CanDeactivateGuard } from '../calendar-event-form/can-deactivate-guard.service';
import { CalendarEventDetailComponent } from './calendar-event/calendar-event-detail/calendar-event-detail.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarListResolver } from './calendar-list/calendar-list.resolver';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent,
    // canActivate: [AuthGuard],
    resolve: {
      events: CalendarListResolver,
    },
    children: [
      {
        path: '',
        component: CalendarListComponent,
      },
      {
        path: 'event',
        component: CalendarEventComponent,
        children: [
          {
            path: ':id',
            component: CalendarEventDetailComponent,
            resolve: {
              events: CalendarListResolver,
            },
          },
          {
            path: ':id/edit',
            component: CalendarEventFormComponent,
            canDeactivate: [CanDeactivateGuard],
          },
        ],
      },
      {
        path: 'create-event',
        component: CalendarEventFormComponent,
      },
      {
        path: '**',
        redirectTo: '../**',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
