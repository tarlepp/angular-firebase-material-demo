import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { TodosComponent, TodosResolver } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    TodosComponent,
  ],
  exports: [
    TodosComponent,
  ],
  providers: [
    TodosResolver,
  ]
})

export class TodosModule { }
