import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { ChatComponent } from './index';

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
})

export class ChatModule { }
