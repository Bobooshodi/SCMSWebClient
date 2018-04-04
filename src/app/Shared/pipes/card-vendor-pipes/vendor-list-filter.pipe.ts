import { Pipe, PipeTransform } from '@angular/core';
import { CardVendor } from '../../../Models/Domain/card-vendor.model';

@Pipe({
  name: 'vendorListFilter'
})
export class VendorListFilterPipe implements PipeTransform {

  transform(listItems: CardVendor[], filter): any {
    return filter
            ? (listItems.filter(item => item.name.toLowerCase().indexOf(filter) !== -1) ||
              listItems.filter(item => item.phone.toLowerCase().indexOf(filter) !== -1) ||
              listItems.filter(item => item.address.toLowerCase().indexOf(filter) !== -1))
            : listItems;
  }

}
