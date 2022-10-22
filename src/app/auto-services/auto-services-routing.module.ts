import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutoServicesComponent} from './auto-services.component';

const routes: Routes = [
  {
    path: '',
    component: AutoServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoServicesRoutingModule {}
