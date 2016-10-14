import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { ChatComponent } from './chat.component';
import { ChatResolver } from './chat.resolver';

export const ChatRoutes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [
      AuthenticationGuard,
    ],
    resolve: {
      messages: ChatResolver,
    },
  },
];
