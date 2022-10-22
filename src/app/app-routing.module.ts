import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./auto-services/auto-services.module').then(
        m => m.AutoServicesModule
      ),
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule),
  },
  {
    path: 'stores',
    loadChildren: () =>
      import('./stores/stores.module').then(m => m.StoresModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
