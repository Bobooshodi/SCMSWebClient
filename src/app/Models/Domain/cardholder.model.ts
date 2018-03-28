import { BaseModel } from '../base-model.model';
import { IdentificationType } from '../Enums/identification-type.enum';
import { CardUserStatus } from '../Enums/card-user-status.enum';
import { Card } from './card.model';
import { CarPark } from './car-park.model';
import { Vehicle } from './vehicle.model';

export class Cardholder extends BaseModel {
  firstName: string;
  lastName: string;
  fullName: string = this.firstName + ' ' + this.lastName;
  gender: string;
  smartCardId: string;
  identificationNo: string;
  nationality: string;
  phone: string;
  workPhone: string;
  email: string;
  workEmail: string;
  address: string;
  city: string;
  state: string;
  identificationType: IdentificationType;
  status: CardUserStatus;
  dateOfBirth: Date;
  cards: Card[];
  carParks: CarPark[];
  vehicles: Vehicle[];
}
