import { BaseModel } from '../base-model.model';

export class CardVendor extends BaseModel {
  name: string;
  description: string;
  address: string;
  phone: string;
}
