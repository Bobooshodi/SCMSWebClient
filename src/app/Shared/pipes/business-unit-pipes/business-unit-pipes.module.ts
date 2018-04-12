import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessUnitsListFilterPipe } from './business-units-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BusinessUnitsListFilterPipe
  ],
  declarations: [BusinessUnitsListFilterPipe]
})
export class BusinessUnitPipesModule { }
