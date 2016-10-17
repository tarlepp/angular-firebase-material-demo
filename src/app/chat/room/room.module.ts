import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module'
import { RoomComponent, MessageResolver, NickResolver } from './index';
import { RoomGuard } from './room.guard';

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
    RoomGuard,
    MessageResolver,
    NickResolver,
  ]
})

export class RoomModule { }
