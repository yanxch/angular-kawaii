import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularKawaiiModule } from 'angular-kawaii';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularKawaiiModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}
