import { BaseModel } from '../base-model.model';
import { CardUserStatus } from '../Enums/card-user-status.enum';

export class CardholderStatusHistory extends BaseModel {
  cardholderId: string;
  initialStatus: CardUserStatus;
  finalStatus: CardUserStatus;
}
