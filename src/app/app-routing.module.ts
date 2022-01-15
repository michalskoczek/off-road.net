import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AutoServicesComponent } from './auto-services/auto-services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CalendarEventFormComponent } from './calendar-event-form/calendar-event-form.component';
import { CanDeactivateGuard } from './calendar-event-form/can-deactivate-guard.service';
import { CalendarEventDetailComponent } from './calendar/calendar-event/calendar-event-detail/calendar-event-detail.component';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { CalendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { CalendarListResolver } from './calendar/calendar-list/calendar-list.resolver';
import { CalendarComponent } from './calendar/calendar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { StoresComponent } from './stores/stores.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
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
        path: 'signup',
        component: RegisterComponent,
      },
      {
        path: '**',
        redirectTo: '../**',
      },
    ],
  },
  {
    path: 'services',
    component: AutoServicesComponent,
  },
  {
    path: 'stores',
    component: StoresComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
