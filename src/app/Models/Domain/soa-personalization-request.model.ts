import { BaseModel } from '../base-model.model';
import { IdentificationType } from '../Enums/identification-type.enum';
import { RequestStatus } from '../Enums/request-status.enum';
import { CardType } from './card-type.model';

export class SOAPersonalizationRequest extends BaseModel {
  requestId: string;
  contractNo: string;
  cardholderId: string;
  cardholder: string;
  identificationNo: string;
  identificationType: IdentificationType;
  cardInventoryNo: string;
  cardType: CardType;
  personalizationStatus: RequestStatus;
  requestDate: Date;
}
