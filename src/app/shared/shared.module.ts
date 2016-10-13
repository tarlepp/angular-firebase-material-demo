import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationModule } from './authentication/authentication.module';
import { Directives } from './directives/';

@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    CommonModule,
    AuthenticationModule.forRoot(),
  ],
  exports: [
    CommonModule,
    ...Directives,
  ]
})

export class SharedModule { }
