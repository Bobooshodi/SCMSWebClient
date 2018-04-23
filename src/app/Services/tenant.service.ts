import { Injectable } from '@angular/core';

import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';
import { ApiEndPoints } from '../Shared/api-end-points';

@Injectable()
export class TenantService extends AbstractService {

  getAllUrl = ApiEndPoints.allTenants;
  getUrl = ApiEndPoints.getTenant;
  postUrl = ApiEndPoints.createNewTenant;
  putUrl = ApiEndPoints.updateTenant;
  deleteUrl = ApiEndPoints.deleteTenant;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
