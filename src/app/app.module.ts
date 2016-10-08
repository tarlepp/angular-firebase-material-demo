import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdIconRegistry } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
