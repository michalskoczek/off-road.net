import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarCreateEventComponent } from './calendar/calendar-create-event/calendar-create-event.component';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { CalendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomepageComponent } from './homepage/homepage.component';

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
        path: 'calendar-list',
        component: CalendarListComponent,
      },
      {
        path: 'event',
        component: CalendarEventComponent,
      },
      {
        path: 'create-event',
        component: CalendarCreateEventComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
