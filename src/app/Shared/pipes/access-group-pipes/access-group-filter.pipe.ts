import { Pipe, PipeTransform } from '@angular/core';
import { AccessGroup } from '../../../Models/Domain/access-group.model';

@Pipe({
  name: 'accessGroupFilter'
})
export class AccessGroupFilterPipe implements PipeTransform {

  transform(listItems: any[], filter: any): any {
    return filter
            ? (listItems.filter(item => item.displayName.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
