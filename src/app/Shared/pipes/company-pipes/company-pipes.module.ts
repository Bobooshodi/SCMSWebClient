import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListFilterPipe } from './companies-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CompaniesListFilterPipe
  ],
  declarations: [CompaniesListFilterPipe]
})
export class CompanyPipesModule { }
