import { Injectable } from '@angular/core';

import { ApiEndPoints } from '../Shared/api-end-points';

import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class ShcTenantsService extends AbstractService {

  getAllUrl = ApiEndPoints.allSHCTenants;
  getUrl = ApiEndPoints.getSHCTenant;
  postUrl = ApiEndPoints.createNewSHCTenant;
  putUrl = ApiEndPoints.updateSHCTenant;
  deleteUrl = ApiEndPoints.deleteSHCTenant;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
