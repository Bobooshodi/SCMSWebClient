import { BaseModel } from '../base-model.model';
import { CarParkStatus } from '../Enums/car-park-status.enum';

export class CarParkStatusHistory extends BaseModel {
  carParkId: string;
  initialStatus: CarParkStatus;
  finalStatus: CarParkStatus;
}
