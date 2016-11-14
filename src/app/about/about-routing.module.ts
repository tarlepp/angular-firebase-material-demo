import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'about',
        component: AboutComponent,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class AboutRoutingModule { }
