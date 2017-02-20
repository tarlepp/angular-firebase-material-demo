import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';
import { Ng2Webstorage } from 'ng2-webstorage';

import 'hammerjs';

import { AuthenticationModule } from './authentication/authentication.module';
import { Directives } from './directives/';
import { Config } from '../config/config';
import { AnimationsService } from './animations/animations.service';

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
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(Config.FIREBASE_CONFIG, Config.FIREBASE_AUTH_CONFIG),
    MomentModule,
    Ng2Webstorage,
  ],
  providers: [
    MdIconRegistry,
    AnimationsService,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AuthenticationModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule,
    MomentModule,
    Ng2Webstorage,
    ...Directives,
  ],
})

export class SharedModule { }
