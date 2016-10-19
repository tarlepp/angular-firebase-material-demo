import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { TodosComponent } from './todos.component';
import { TodosResolver } from './resolves/';

export const TodosRoutes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [
      AuthenticationGuard,
    ],
    resolve: {
      todos: TodosResolver
    }
  },
];