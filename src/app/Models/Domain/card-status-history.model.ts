import { BaseModel } from '../base-model.model';
import { CardStatus } from '../Enums/card-status.enum';

export class CardStatusHistory extends BaseModel {
  cardId: string;
  initialStatus: CardStatus;
  finalStatus: CardStatus;
}
