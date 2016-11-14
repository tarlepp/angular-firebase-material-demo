import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
  ],
  exports: [
    FooterModule,
    HeaderModule,
  ],
})

export class LayoutModule { }
