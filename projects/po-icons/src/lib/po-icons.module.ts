import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoIconComponent } from './po-icon.component';
import { PoIconService } from './po-icon.service';

@NgModule({
  declarations: [PoIconComponent],
  imports: [
    CommonModule
  ],
  exports: [PoIconComponent]
})

export class PoIconsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PoIconsModule,
      providers: [PoIconService]
    };
  }
}
