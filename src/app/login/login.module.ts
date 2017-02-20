import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './index';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
})

export class LoginModule { }
