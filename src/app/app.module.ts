import { NgModule } from '@angular/core';
import {NgxsModule} from "@ngxs/store";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NameState} from "./store/namestate";
import {PositionState} from "./store/positionstate";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexModule,
    MatIconModule,
    ExtendedModule,
    MatExpansionModule,
    MatSidenavModule,
    NgxsModule.forRoot([NameState,PositionState],{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
