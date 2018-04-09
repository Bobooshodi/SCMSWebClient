import { BaseModel } from './base-model.model';

export class BaseStatusHistory extends BaseModel {
  soaRequestId: string;
  remark: string;
  occurrenceTime: Date;
  actionPerformById: string;
  actionPerformBy: string;
}
