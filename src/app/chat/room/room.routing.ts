import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { RoomComponent, NickGuard, MessagesResolver, NickResolver } from './index';

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

