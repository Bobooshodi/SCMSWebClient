import { BaseModel } from '../base-model.model';
import { AccessGroup } from './access-group.model';

export class SHCTenant extends BaseModel {
  name: string;
  code: string;
  address: string;
  contactPerson: string;
  email: string;
  phone: string;
  buildingId: string;
  building: string;
  imageUrl: string;
  isActive: boolean;
  accessGroups: AccessGroup[];
}
