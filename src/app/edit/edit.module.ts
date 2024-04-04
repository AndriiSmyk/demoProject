import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import {RouterModule, Routes} from "@angular/router";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: '', component: EditComponent}
]

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatCardModule,
    ExtendedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EditModule { }
