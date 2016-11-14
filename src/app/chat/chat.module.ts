import { NgModule } from '@angular/core';

import { RoomModule } from './room/room.module';
import { EntryModule } from './entry/entry.module';

@NgModule({
  imports: [
    EntryModule,
    RoomModule,
  ],
  exports: [
    EntryModule,
    RoomModule,
  ],
})

export class ChatModule { }
