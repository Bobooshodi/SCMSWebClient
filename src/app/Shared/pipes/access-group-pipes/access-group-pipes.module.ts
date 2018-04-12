import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessGroupFilterPipe } from './access-group-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AccessGroupFilterPipe
  ],
  declarations: [AccessGroupFilterPipe]
})
export class AccessGroupPipesModule { }
