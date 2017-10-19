import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { JSONService } from './services/json.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
    ],
  providers: [JSONService],
  bootstrap: [AppComponent],
  exports:[AppModule]
})
export class AppModule { }
