import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header',
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class HeaderRoutingModule { }
