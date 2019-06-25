import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoIconComponent } from './po-icon.component';

@NgModule({
  declarations: [PoIconComponent],
  imports: [
    CommonModule
  ],
  exports: [PoIconComponent]
})

export class PoIconsModule { }
