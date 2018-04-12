import { BaseModel } from '../base-model.model';
import { Building } from './building.model';

export class AccessGroup extends BaseModel {
  displayName: string;
  nameInAccessControl: string;
  keyInAccessControl: string;
  accessControlDetail: string;
  accessControlDetail2: string;
  accessControlDetail3: string;
  description: string;
  accessControl: string;
  accessControlId: string;
  buildings: Building[];

  isSelected: boolean;
}
