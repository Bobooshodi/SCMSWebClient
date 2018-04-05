import { Pipe, PipeTransform } from '@angular/core';
import { SOAPersonalizationRequest } from './../../../Models/Domain/soa-personalization-request.model';

@Pipe({
  name: 'personalisationRequestsFilter'
})
export class PersonalisationRequestsFilterPipe implements PipeTransform {

  transform(listItems: SOAPersonalizationRequest[], filter: string): any {
    return filter
            ? (listItems.filter(item => item.cardholder.toLowerCase().indexOf(filter) !== -1 ||
                item.cardInventoryNo.toLowerCase().indexOf(filter) !== -1 ||
                item.contractNo.toLowerCase().indexOf(filter) !== -1 ||
                item.identificationNo.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
