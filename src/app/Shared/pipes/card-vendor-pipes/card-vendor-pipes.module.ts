import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListFilterPipe } from './vendor-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VendorListFilterPipe
  ],
  declarations: [VendorListFilterPipe]
})
export class CardVendorPipesModule { }
