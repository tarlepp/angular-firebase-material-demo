import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutRoutes } from './layout/';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  //...AboutRoutes,
  //...ChatRoutes,
  ...LayoutRoutes,
  // ...LoginRoutes,
  //...TodosRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }
