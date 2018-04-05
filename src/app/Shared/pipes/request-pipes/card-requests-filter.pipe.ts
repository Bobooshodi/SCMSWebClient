import { Pipe, PipeTransform } from '@angular/core';
import { SOACardRequest } from '../../../Models/Domain/soa-card-request.model';

@Pipe({
  name: 'cardRequestsFilter'
})
export class CardRequestsFilterPipe implements PipeTransform {

  transform(listItems: SOACardRequest[], filter: string): any {
    return filter
            ? (listItems.filter(item => item.businessUnit.toLowerCase().indexOf(filter) !== -1 ||
                item.cardType.name.toLowerCase().indexOf(filter) !== -1 ||
                item.requestedBy.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
