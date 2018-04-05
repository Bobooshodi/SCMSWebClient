import { Pipe, PipeTransform } from '@angular/core';
import { SOAReplaceCardRequest } from '../../../Models/Domain/soa-replace-card-request.model';

@Pipe({
  name: 'replacementRequestsFilter'
})
export class ReplacementRequestsFilterPipe implements PipeTransform {

  transform(listItems: SOAReplaceCardRequest[], filter: string): any {
    return filter
            ? (listItems.filter(item => item.cardholder.toLowerCase().indexOf(filter) !== -1 ||
                item.cardId.toLowerCase().indexOf(filter) !== -1 ||
                item.replacedBy.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
