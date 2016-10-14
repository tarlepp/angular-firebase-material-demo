import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { ChatComponent, ChatResolver } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ChatComponent,
  ],
  exports: [
    ChatComponent,
  ],
  providers: [
    ChatResolver,
  ]
})

export class ChatModule { }
