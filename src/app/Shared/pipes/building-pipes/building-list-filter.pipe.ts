import { Pipe, PipeTransform } from '@angular/core';
import { Building } from '../../../Models/Domain/building.model';

@Pipe({
  name: 'buildingListFilter'
})
export class BuildingListFilterPipe implements PipeTransform {

  transform(listItems: Building[], filter: string): any {
    return filter
            ? (listItems.filter(item => item.name.toLowerCase().indexOf(filter) !== -1 ||
              item.contactPerson.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
