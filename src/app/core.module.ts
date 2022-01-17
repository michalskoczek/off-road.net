import { LOCALE_ID, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CanDeactivateGuard } from './calendar-event-form/can-deactivate-guard.service';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    CanDeactivateGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
