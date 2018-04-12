import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../../../Models/Domain/company.model';

@Pipe({
  name: 'companiesListFilter'
})
export class CompaniesListFilterPipe implements PipeTransform {

  transform(listItems: Company[], filter): any {
    return filter ?
    listItems.filter(o => o.name.toLowerCase().indexOf(filter) !== -1)
    : listItems;
  }

}
