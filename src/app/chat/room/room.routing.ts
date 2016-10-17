import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { RoomComponent } from './room.component';
import { MessageResolver } from './message.resolver';
import { NickResolver } from './nick.resolver';
import { RoomGuard } from './room.guard';

export const RoomRoutes: Routes = [
  {
    path: 'chat',
    component: RoomComponent,
    canActivate: [
      AuthenticationGuard,
      RoomGuard,
    ],
    resolve: {
      messages: MessageResolver,
      nick: NickResolver,
    },
  },
];
