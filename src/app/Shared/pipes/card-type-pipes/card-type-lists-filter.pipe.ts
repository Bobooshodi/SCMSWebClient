import { CardType } from './../../../Models/Domain/card-type.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardTypeListsFilter'
})
export class CardTypeListsFilterPipe implements PipeTransform {

  transform(listItems: CardType[], filter): any {
    return filter
            ? (listItems.filter(item => item.name.toLowerCase().indexOf(filter) !== -1) ||
              listItems.filter(item => item.description.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
