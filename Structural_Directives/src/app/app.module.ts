import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { NgswitchDemoComponent } from './ngswitch-demo/ngswitch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComponent,
    NgifDemoComponent,
    NgswitchDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
