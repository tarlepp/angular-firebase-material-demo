import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { EntryComponent, EntryGuard } from './index';
import { EntryRoutingModule } from './entry-routing.module';

@NgModule({
  imports: [
    SharedModule,
    EntryRoutingModule,
  ],
  declarations: [
    EntryComponent,
  ],
  exports: [
    EntryComponent,
  ],
  providers: [
    EntryGuard,
  ],
})

export class EntryModule { }
