import { BaseModel } from '../base-model.model';
import { CardType } from './card-type.model';

export class SOACardRequest extends BaseModel {
  requestId: string;
  quantity: number;
  quantityDistributed: number;
  cardType: CardType;
  businessUnit: string;
  businessUnitId: string;
  requestedBy: string;
  requestedById: string;
  requestDate: Date;
}
