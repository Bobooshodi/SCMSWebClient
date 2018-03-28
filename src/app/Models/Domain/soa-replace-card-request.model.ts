import { BaseModel } from '../base-model.model';
import { RequestStatus } from '../Enums/request-status.enum';

export class SOAReplaceCardRequest extends BaseModel {
  replacementId: string;
  requestStatus: RequestStatus;
  cardId: string;
  replacedCardId: string;
  cardholderId: string;
  cardholder: string;
  replacementReason: string;
  replacedBy: string;
  replacedById: string;
  requestedDate: Date;
  replacedDate: Date;
}
