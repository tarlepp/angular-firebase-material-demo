import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AboutComponent, AboutListComponent } from './index';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
    AboutListComponent,
  ],
  exports: [
    AboutComponent,
    AboutListComponent,
  ],
})

export class AboutModule { }
