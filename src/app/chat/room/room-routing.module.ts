import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { RoomComponent, NickGuard, MessagesResolver, NickResolver } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'chat',
        component: RoomComponent,
        canActivate: [
          AuthenticationGuard,
          NickGuard,
        ],
        resolve: {
          messages: MessagesResolver,
          nick: NickResolver,
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class RoomRoutingModule { }
