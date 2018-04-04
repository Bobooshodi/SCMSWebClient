import { CardTypeFormatterPipe } from './card-type-formatter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListFilterPipe } from './card-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardTypeFormatterPipe,
    CardListFilterPipe
  ],
  exports: [
    CardTypeFormatterPipe,
    CardListFilterPipe
  ]
})
export class CardPipesModule { }
