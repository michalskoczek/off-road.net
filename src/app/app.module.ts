import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import '@angular/common/locales/global/pl';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AutoServicesComponent } from './auto-services/auto-services.component';
import { StoresComponent } from './stores/stores.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OptionsPanelComponent } from './options-panel/options-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OptionsPanelEventComponent } from './options-panel-event/options-panel-event.component';
import { CalendarEventFormComponent } from './calendar-event-form/calendar-event-form.component';
import { CalendarEventDetailComponent } from './calendar/calendar-event/calendar-event-detail/calendar-event-detail.component';
import { CanDeactivateGuard } from './calendar-event-form/can-deactivate-guard.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    AutoServicesComponent,
    StoresComponent,
    BlogsComponent,
    OptionsPanelComponent,
    CalendarListComponent,
    CalendarEventComponent,
    HomepageComponent,
    PageNotFoundComponent,
    OptionsPanelEventComponent,
    CalendarEventFormComponent,
    CalendarEventDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }, CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
