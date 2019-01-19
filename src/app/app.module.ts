import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidepaneComponent } from './sidepane/sidepane.component';
import { MainpaneComponent } from './mainpane/mainpane.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidepaneComponent,
    MainpaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [LayoutComponent]
})

export class AppModule { }
