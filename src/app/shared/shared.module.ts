import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';

import { AuthenticationModule } from './authentication/authentication.module';
import { Directives } from './directives/';
import { config } from '../config/config';

@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule.forRoot(),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config.FIREBASE_CONFIG, config.FIREBASE_AUTH_CONFIG),
    MomentModule,
  ],
  providers: [
    MdIconRegistry,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    MaterialModule,
    AngularFireModule,
    MomentModule,
    ...Directives,
  ],
})

export class SharedModule { }
