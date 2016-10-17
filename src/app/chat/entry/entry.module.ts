import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module'
import { EntryComponent } from './entry.component';

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
})

export class EntryModule { }
