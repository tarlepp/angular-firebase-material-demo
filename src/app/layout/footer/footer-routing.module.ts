import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer',
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class FooterRoutingModule { }
