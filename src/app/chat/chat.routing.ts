import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { ChatComponent } from './chat.component';

export const ChatRoutes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [
      AuthenticationGuard,
    ],
  }
];
