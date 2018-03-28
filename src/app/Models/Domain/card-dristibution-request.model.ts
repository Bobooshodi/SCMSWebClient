import { BaseModel } from '../base-model.model';
import { Card } from './card.model';

export class CardDristibutionRequest extends BaseModel {
  requestId: string;
  distributionId: string;
  distributionBy: string;
  distributionById: string;
  distributionDate: Date;
  cards: Card[];
}
