import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarEventFormComponent } from './calendar-event-form/calendar-event-form.component';
import { CalendarEventDetailComponent } from './calendar/calendar-event/calendar-event-detail/calendar-event-detail.component';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { CalendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    component: CalendarComponent,
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
          },
          {
            path: ':id/edit',
            component: CalendarEventFormComponent,
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
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { errorMessage: 'Page not found!' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
