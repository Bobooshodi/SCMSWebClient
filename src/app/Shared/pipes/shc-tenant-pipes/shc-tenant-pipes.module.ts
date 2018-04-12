import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShcTenantsListFilterPipe } from './shc-tenants-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ShcTenantsListFilterPipe],
  declarations: [ShcTenantsListFilterPipe]
})
export class ShcTenantPipesModule { }
