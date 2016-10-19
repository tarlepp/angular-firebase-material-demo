import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { EntryComponent } from './entry.component';
import { EntryGuard } from './guards/';

export const EntryRoutes: Routes = [
  {
    path: 'chat/entry',
    component: EntryComponent,
    canActivate: [
      AuthenticationGuard,
      EntryGuard,
    ],
  },
];
