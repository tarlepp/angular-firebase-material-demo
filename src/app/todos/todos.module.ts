import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { TodosComponent, TodosResolver } from './index';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TodosRoutingModule,
  ],
  declarations: [
    TodosComponent,
  ],
  exports: [
    TodosComponent,
  ],
  providers: [
    TodosResolver,
  ],
})

export class TodosModule { }
