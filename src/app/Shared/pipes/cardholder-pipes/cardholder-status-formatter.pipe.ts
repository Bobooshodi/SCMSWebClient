import { Pipe, PipeTransform } from '@angular/core';
import { CardUserStatus } from '../../../Models/Enums/card-user-status.enum';

@Pipe({
  name: 'cardholderStatusFormatter'
})
export class CardholderStatusFormatterPipe implements PipeTransform {

  transform(value: CardUserStatus): string {
    let status = '';

    switch (value) {
      case CardUserStatus.ACTIVE:
      status = 'Active';
      break;
      case CardUserStatus.BLACKLIST:
      status = 'Blacklisted';
      break;
      case CardUserStatus.INACTIVE:
      status = 'Inactive';
      break;
    }

    return status;
  }

}
