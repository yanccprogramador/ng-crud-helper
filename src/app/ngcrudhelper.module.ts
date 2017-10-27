import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JSONService } from './services/json.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpModule
    ],
  providers: [JSONService],
  bootstrap: [],
  exports: [NgCrudHelperModule]
})
export class NgCrudHelperModule { }
