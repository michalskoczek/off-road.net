import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpinnerComponent} from './spinner/spinner.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SpinnerComponent, PageNotFoundComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {
      //   path: '**',
      //   component: PageNotFoundComponent,
      //   data: { errorMessage: 'Page not found!' },
      // },
    ]),
  ],
  exports: [SpinnerComponent, HeaderComponent],
})
export class SharedModule {}
