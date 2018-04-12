import { Pipe, PipeTransform } from '@angular/core';
import { SHCTenant } from '../../../Models/Domain/shc-tenant.model';

@Pipe({
  name: 'shcTenantsListFilter'
})
export class ShcTenantsListFilterPipe implements PipeTransform {

  transform(listItems: SHCTenant[], filter: any): any {
    return filter ?
            listItems.filter(c => c.name.toLowerCase().indexOf(filter) !== -1)
            : listItems;
  }

}
