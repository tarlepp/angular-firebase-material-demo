import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { ListComponent } from './list.component';
import { TodosResolver } from './todos.resolver';

export const TodosListRoutes: Routes = [
  {
    path: 'todos',
    component: ListComponent,
    canActivate: [
      AuthenticationGuard,
    ],
    resolve: {
      todos: TodosResolver
    }
  },
];
