import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../../../Models/Domain/card.model';

@Pipe({
  name: 'cardListFilter'
})
export class CardListFilterPipe implements PipeTransform {

  transform(listItems: Card[], filter): any {
    return filter
            ? (listItems.filter(item => item.cardInventoryNo.toLowerCase().indexOf(filter) !== -1 ||
              item.mifareId.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
