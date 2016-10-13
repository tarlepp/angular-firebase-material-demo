import { Routes } from '@angular/router';

import { TodosListRoutes } from './list/list.routing';

export const TodosRoutes: Routes = [
  ...TodosListRoutes
];