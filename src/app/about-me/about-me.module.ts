import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutMeComponent} from './about-me/about-me.component';
import {MatCardModule} from "@angular/material/card";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";

const routes: Routes = [
  {path: '', component: AboutMeComponent}
]

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexModule,
    ExtendedModule
  ]
})
export class AboutMeModule {
}
