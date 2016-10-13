import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Directives } from './directives/'

@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ...Directives,
  ]
})

export class SharedModule { }
