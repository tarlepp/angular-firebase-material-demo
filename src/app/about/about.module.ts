import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module'
import { AboutComponent } from './index';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
  ],
  exports: [
    AboutComponent,
  ],
})

export class AboutModule { }
