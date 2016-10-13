import { Routes } from '@angular/router';

import { HeaderComponent } from './header.component';

export const LayoutHeaderRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet: 'header'
  },
];
