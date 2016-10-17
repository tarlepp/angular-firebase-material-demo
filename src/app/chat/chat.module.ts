import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core/src/metadata/ng_module';

import { RoomModule } from './room/room.module';
import { EntryModule } from './entry/entry.module';

@NgModule({
  imports: [
    CommonModule,
    EntryModule,
    RoomModule,
  ],
  exports: [
    EntryModule,
    RoomModule,
  ],
})

export class ChatModule { }
