import { Injectable } from '@angular/core';
import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';
import { ApiEndPoints } from '../Shared/api-end-points';

@Injectable()
export class BusinessUnitsService extends AbstractService {

  getAllUrl = ApiEndPoints.allBusinessUnits;
  getUrl = ApiEndPoints.getBusinessUnit;
  postUrl = ApiEndPoints.createNewBusinessUnit;
  putUrl = ApiEndPoints.updateBusinessUnit;
  deleteUrl = ApiEndPoints.deleteBusinessUnit;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
