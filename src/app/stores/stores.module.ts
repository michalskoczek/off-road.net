import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoresRoutingModule} from './stores-routing.module';
import {StoresComponent} from './stores.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [StoresComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class StoresModule {}
