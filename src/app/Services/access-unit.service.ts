import { Injectable } from '@angular/core';

import { AbstractService } from './common/abstract.service';
import { ApiEndPoints } from '../Shared/api-end-points';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class AccessUnitService extends AbstractService {

  getAllUrl = ApiEndPoints.allAccessGroups;
  getUrl = ApiEndPoints.getAccessGroup;
  postUrl = ApiEndPoints.createNewAccessGroup;
  putUrl = ApiEndPoints.updateAccessGroup;
  deleteUrl = ApiEndPoints.deleteAccessGroup;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
