import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingListFilterPipe } from './building-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BuildingListFilterPipe
  ],
  declarations: [BuildingListFilterPipe]
})
export class BuildingPipesModule { }
