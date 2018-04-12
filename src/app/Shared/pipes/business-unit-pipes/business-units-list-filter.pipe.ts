import { Pipe, PipeTransform } from '@angular/core';
import { BusinessUnit } from '../../../Models/Domain/business-unit.model';

@Pipe({
  name: 'businessUnitsListFilter'
})
export class BusinessUnitsListFilterPipe implements PipeTransform {

  transform(listItems: BusinessUnit[], filter: any): any {
    return filter
    ? (listItems.filter(item => item.name.toLowerCase().indexOf(filter) !== -1))
    : listItems;
  }

}
