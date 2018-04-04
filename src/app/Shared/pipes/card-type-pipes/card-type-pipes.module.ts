import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTypeListsFilterPipe } from './card-type-lists-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CardTypeListsFilterPipe
  ],
  declarations: [CardTypeListsFilterPipe]
})
export class CardTypePipesModule { }
