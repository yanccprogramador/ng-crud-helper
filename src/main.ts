import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgCrudHelperModule } from './app/ngcrudhelper.module';


  enableProdMode();

platformBrowserDynamic().bootstrapModule(NgCrudHelperModule);
