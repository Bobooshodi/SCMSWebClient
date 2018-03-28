import { BaseModel } from '../base-model.model';
import { CarParkStatus } from '../Enums/car-park-status.enum';

export class CarPark extends BaseModel {
  requestId: string;
  cardParkId: string;
  bayNo: string;
  bayType: string;
  bayLocation: string;
  building: string;
  status: CarParkStatus;
  cardholderId: string;
  cardholder: string;
  startDate: Date;
  endDate: Date;
}
