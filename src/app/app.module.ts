import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AutoServicesComponent } from './auto-services/auto-services.component';
import { StoresComponent } from './stores/stores.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OptionsPanelComponent } from './options-panel/options-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarCreateEventComponent } from './calendar/calendar-create-event/calendar-create-event.component';
import { CalendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    AutoServicesComponent,
    StoresComponent,
    BlogsComponent,
    OptionsPanelComponent,
    CalendarCreateEventComponent,
    CalendarListComponent,
    CalendarEventComponent,
    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
