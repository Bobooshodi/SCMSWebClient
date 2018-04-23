import { BaseModel } from '../base-model.model';
import { SHCCardType } from '../Enums/shc-card-type.enum';
import { BusinessUnit } from './business-unit.model';

export class CardType extends BaseModel {
  name: string;
  description: string;
  isPermanent: boolean;
  cardType: SHCCardType;
  businessUnits: BusinessUnit[];
  isSelected: boolean;
}
