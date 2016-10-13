import { Routes } from '@angular/router';

import { FooterComponent } from './footer.component';

export const LayoutFooterRoutes: Routes = [
  {
    path: '',
    component: FooterComponent,
    outlet: 'footer'
  },
];
