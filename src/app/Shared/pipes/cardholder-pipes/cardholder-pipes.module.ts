import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardholderStatusFormatterPipe } from './cardholder-status-formatter.pipe';
import { CardholderListFilterPipe } from './cardholder-list-filter.pipe';
import { CardholderIdTypeFormatterPipe } from './cardholder-id-type-formatter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardholderListFilterPipe,
    CardholderStatusFormatterPipe,
    CardholderIdTypeFormatterPipe,
  ],
  exports: [
    CardholderListFilterPipe,
    CardholderStatusFormatterPipe,
    CardholderIdTypeFormatterPipe,
  ]
})
export class CardholderPipesModule { }
