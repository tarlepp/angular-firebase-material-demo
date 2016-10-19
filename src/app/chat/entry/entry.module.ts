import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module'
import { EntryComponent, EntryGuard } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    EntryComponent,
  ],
  exports: [
    EntryComponent,
  ],
  providers: [
    EntryGuard,
  ]
})

export class EntryModule { }
