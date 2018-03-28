import { BaseModel } from '../base-model.model';

export class CardDetail extends BaseModel {
  cardId: string;
  sector: number;
  block0: string;
  block1: string;
  block2: string;
}
