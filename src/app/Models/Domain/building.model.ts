import { BaseModel } from '../base-model.model';
import { AccessGroup } from './access-group.model';

export class Building extends BaseModel {
  name: string;
  image: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  accessGroups: AccessGroup[];
  isSelected: boolean;
}
