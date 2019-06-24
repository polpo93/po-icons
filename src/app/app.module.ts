import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ColorSketchModule } from 'ngx-color/sketch';

import {
  MatCommonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatSelectModule,
  MatSliderModule,
  MatDialogModule,
  MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PoIconsModule } from 'po-icons';
import { PoDialogColorComponent } from './po-dialog-color/po-dialog-color.component';

@NgModule({
  declarations: [
    AppComponent,
    PoDialogColorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatDialogModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ColorSketchModule,
    PoIconsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PoDialogColorComponent
  ]
})
export class AppModule { }
