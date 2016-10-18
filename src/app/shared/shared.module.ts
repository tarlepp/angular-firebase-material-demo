import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AuthenticationModule } from './authentication/authentication.module';
import { Directives } from './directives/';
import { Config } from '../config/config';

@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AuthenticationModule.forRoot(),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(Config.FIREBASE_CONFIG, Config.FIREBASE_AUTH_CONFIG),
    MomentModule,
    Ng2Webstorage,
  ],
  providers: [
    MdIconRegistry,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AuthenticationModule,
    MaterialModule,
    AngularFireModule,
    MomentModule,
    Ng2Webstorage,
    ...Directives,
  ],
})

export class SharedModule { }
