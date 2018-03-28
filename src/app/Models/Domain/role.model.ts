import { AppResource } from './app-resource.model';
import { BaseModel } from '../base-model.model';

export class Role extends BaseModel {
  Name: string;
  Resources: AppResource[];
}
