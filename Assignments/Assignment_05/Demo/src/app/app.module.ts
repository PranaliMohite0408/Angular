import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SeconCompComponent } from './secon-comp/secon-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SeconCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
