import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module'
import { RoomComponent, MessagesResolver, NickGuard, NickResolver } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    RoomComponent,
  ],
  exports: [
    RoomComponent,
  ],
  providers: [
    MessagesResolver,
    NickGuard,
    NickResolver,
  ]
})

export class RoomModule { }
