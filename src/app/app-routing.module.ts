import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutRoutes } from './about/';
import { ChatRoutes } from './chat/';
import { LayoutRoutes } from './layout/';
import { LoginRoutes } from './login/';
import { TodosRoutes } from './todos/';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  ...AboutRoutes,
  ...ChatRoutes,
  ...LayoutRoutes,
  ...LoginRoutes,
  ...TodosRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
