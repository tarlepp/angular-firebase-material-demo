import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { ListComponent } from './list.component';

export const TodosListRoutes: Routes = [
  {
    path: 'todos',
    component: ListComponent,
    canActivate: [
      AuthenticationGuard,
    ],
  },
];
