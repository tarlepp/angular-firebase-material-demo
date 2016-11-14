import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './index';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HeaderRoutingModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class HeaderModule { }
