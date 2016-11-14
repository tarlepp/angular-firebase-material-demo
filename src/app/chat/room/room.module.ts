import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { RoomComponent, MessagesResolver, NickGuard, NickResolver } from './index';
import { RoomRoutingModule } from './room-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RoomRoutingModule,
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
  ],
})

export class RoomModule { }
