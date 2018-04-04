import { Pipe, PipeTransform } from '@angular/core';
import { IdentificationType } from '../../../Models/Enums/identification-type.enum';

@Pipe({
  name: 'cardholderIdTypeFormatter'
})
export class CardholderIdTypeFormatterPipe implements PipeTransform {

  transform(value: IdentificationType): string {
    let type = '';

    if (value === IdentificationType.NRIC) {
      type = 'National Identity Card';
    } else {
      type = 'Passport';
    }

    return type;
  }

}
