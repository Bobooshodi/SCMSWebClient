import { BaseModel } from '../base-model.model';

export class Vehicle extends BaseModel {
  numberPlate: string;
  vehicleModel: string;
  brand: string;
  cardholderId: string;
}
