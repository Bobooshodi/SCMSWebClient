import { BaseModel } from '../base-model.model';
import { Company } from './company.model';
import { CardType } from './card-type.model';

export class BusinessUnit extends BaseModel {
  name: string;
  description: string;
  cardTypes: CardType[];
  companies: Company[];
  isSelected: boolean;
}
