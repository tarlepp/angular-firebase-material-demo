import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { EntryComponent } from './entry.component';

export const EntryRoutes: Routes = [
  {
    path: 'chat/entry',
    component: EntryComponent,
    canActivate: [
      AuthenticationGuard,
    ],
  },
];
