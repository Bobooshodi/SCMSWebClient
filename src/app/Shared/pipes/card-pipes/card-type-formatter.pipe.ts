import { Pipe, PipeTransform } from '@angular/core';
import { SHCCardType } from '../../../Models/Enums/shc-card-type.enum';

@Pipe({
  name: 'cardTypeFormatter'
})
export class CardTypeFormatterPipe implements PipeTransform {

  transform(value: SHCCardType): any {
    let type = '';

    switch (value) {
      case SHCCardType.EMPLOYEE:
      type = 'Employee';
      break;
      case SHCCardType.INDIVIDUAL:
      type = 'Individual';
      break;
      case SHCCardType.STRATA:
      type = 'Strata';
      break;
      case SHCCardType.TENANT:
      type = 'Tenant';
      break;
    }

    return type;
  }

}
