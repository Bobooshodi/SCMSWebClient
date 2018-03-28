import { BaseModel } from '../base-model.model';
import { CardVendor } from './card-vendor.model';
import { CardStatus } from '../Enums/card-status.enum';

export class Card extends BaseModel {
  batchNo: string;
  cardInventoryNo: string;
  microEngineNo: string;
  cardaxNo: string;
  carParkNo: string;
  requestId: string;
  mifareId: string;
  cardTypeId: string;
  cardType: string;
  personalizedDate: Date | null;
  registeredDate: Date | null;
  startDate: Date | null;
  endDate: Date | null;
  companyId: string;
  company: string;
  distributionId: string;
  registeredBy: string;
  registeredById: string;
  personalizedBy: string;
  personalizedById: string;
  cardVendor: CardVendor;
  cardStatus: CardStatus;
}
