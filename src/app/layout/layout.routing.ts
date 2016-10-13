import { Routes } from '@angular/router';

import { LayoutFooterRoutes } from './footer/footer.routing';
import { LayoutHeaderRoutes } from './header/header.routing';

export const LayoutRoutes: Routes = [
  ...LayoutFooterRoutes,
  ...LayoutHeaderRoutes,
];
