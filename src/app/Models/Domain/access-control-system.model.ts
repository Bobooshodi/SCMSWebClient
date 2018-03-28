import { BaseModel } from '../base-model.model';

export class AccessControlSystem extends BaseModel {
  name: string;
  key: string;
  allowPush: boolean;
  length: number;
  description: string;
  active: boolean;
}
