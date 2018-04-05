import { Pipe, PipeTransform } from '@angular/core';
import { Cardholder } from '../../../Models/Domain/cardholder.model';

@Pipe({
  name: 'cardholderListFilter'
})
export class CardholderListFilterPipe implements PipeTransform {

  transform(listItems: Cardholder[], filter): any {
    return filter
            ? (listItems.filter(item => item.fullName.toLowerCase().indexOf(filter) !== -1 ||
               item.identificationNo.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }
}
