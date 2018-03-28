import { BaseModel } from './base-model.model';

export class BaseStatusHistory extends BaseModel {
  sOARequestId: string;
  remark: string;
  occurrenceTime: Date;
  actionPerformById: string;
  actionPerformBy: string;
}
