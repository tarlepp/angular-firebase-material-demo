import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../../shared';
import { EntryComponent } from './entry.component';
import { EntryGuard } from './guards/';

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
