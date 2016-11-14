import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { TodosComponent, TodosResolver } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'todos',
        component: TodosComponent,
        canActivate: [
          AuthenticationGuard,
        ],
        resolve: {
          todos: TodosResolver,
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class TodosRoutingModule { }
