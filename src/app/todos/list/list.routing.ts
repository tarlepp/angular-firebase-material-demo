import { Routes } from '@angular/router';

import { ListComponent } from './list.component';

export const TodosListRoutes: Routes = [
  {
    path: 'todos',
    component: ListComponent,
  },
];
