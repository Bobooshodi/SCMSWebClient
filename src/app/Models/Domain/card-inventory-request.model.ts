import { BaseModel } from '../base-model.model';
import { CardType } from './card-type.model';

export class CardInventoryRequest extends BaseModel {
  batchNo: string;
  timeStamp: Date;
  generatedById: string;
  generatedBy: string;
  quantity: number;
  cardType: CardType;
}
