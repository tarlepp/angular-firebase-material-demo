import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './index';
import { FooterRoutingModule } from './footer-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FooterRoutingModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})

export class FooterModule { }
