import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { EntryComponent, EntryGuard } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'chat/entry',
        component: EntryComponent,
        canActivate: [
          AuthenticationGuard,
          EntryGuard,
        ],
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class EntryRoutingModule { }
