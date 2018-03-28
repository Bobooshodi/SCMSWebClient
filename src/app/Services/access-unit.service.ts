import { Injectable } from '@angular/core';

import { AbstractService } from './common/abstract.service';
import { ApiEndPoints } from '../Shared/api-end-points';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class AccessUnitService extends AbstractService {

  getAllUrl = ApiEndPoints.allAccessUnits;
  getUrl = ApiEndPoints.getAccessUnit;
  postUrl = ApiEndPoints.createNewAccessUnit;
  putUrl = ApiEndPoints.updateAccessUnit;
  deleteUrl = ApiEndPoints.deleteAccessUnit;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
