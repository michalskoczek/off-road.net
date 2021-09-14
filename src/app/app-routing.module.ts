import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    children: [
      {
        path: 'event',
        component: CalendarEventComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
