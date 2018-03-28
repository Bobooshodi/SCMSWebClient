import { BaseModel } from '../base-model.model';
import { BusinessUnit } from './business-unit.model';

export class Company extends BaseModel {
  name: string;
  code: string;
  businessUnits: BusinessUnit[];
}
