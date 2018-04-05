import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRequestsFilterPipe } from './card-requests-filter.pipe';
import { ReplacementRequestsFilterPipe } from './replacement-requests-filter.pipe';
import { PersonalisationRequestsFilterPipe } from './personalisation-requests-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CardRequestsFilterPipe,
    ReplacementRequestsFilterPipe,
    PersonalisationRequestsFilterPipe,
  ],
  declarations: [
    CardRequestsFilterPipe,
    ReplacementRequestsFilterPipe,
    PersonalisationRequestsFilterPipe,
  ]
})
export class RequestPipesModule { }
