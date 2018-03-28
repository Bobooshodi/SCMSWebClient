import { BaseModel } from '../base-model.model';

export class AppResource extends BaseModel {
  Name: string;
  Description: string;
  AppModuleId: string;
  AppModule: string;
}
