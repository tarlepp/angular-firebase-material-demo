import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { RoomComponent } from './room.component';
import { MessagesResolver } from './messages.resolver';
import { NickResolver } from './nick.resolver';
import { NickGuard } from './nick.guard';

export const RoomRoutes: Routes = [
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
];
