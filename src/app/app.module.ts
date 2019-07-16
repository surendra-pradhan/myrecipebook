import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { sharedModules } from './shared/shared.module';
import { shoppinglistmodule } from './shoppinglist/shoppinglist.module';
import { authmodule } from './auth/auth.module';
import { coreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule ,
    HttpModule ,
    sharedModules,
    shoppinglistmodule,
    authmodule,
    coreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
