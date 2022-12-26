import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchserviceService } from './batchservice.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchdetailsComponent,
    BatchlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BatchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
