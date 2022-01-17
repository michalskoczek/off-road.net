import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoServicesRoutingModule } from './auto-services-routing.module';
import { AutoServicesComponent } from './auto-services.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AutoServicesComponent],
  imports: [
    CommonModule,
    AutoServicesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AutoServicesModule {}
