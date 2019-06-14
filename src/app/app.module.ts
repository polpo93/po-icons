import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCommonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PoIconsModule } from 'po-icons';

@NgModule({
  declarations: [
    AppComponent
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
    MatAutocompleteModule,
    BrowserAnimationsModule,
    PoIconsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
