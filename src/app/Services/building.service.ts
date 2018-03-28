import { Injectable } from '@angular/core';

import { ApiEndPoints } from '../Shared/api-end-points';
import { HttpRequestService } from './common/http-request.service';
import { AbstractService } from './common/abstract.service';

@Injectable()
export class BuildingService extends AbstractService {

  getAllUrl = ApiEndPoints.allBuildings;
  getUrl = ApiEndPoints.getBuilding;
  postUrl = ApiEndPoints.createNewBuilding;
  putUrl = ApiEndPoints.updateBuilding;
  deleteUrl = ApiEndPoints.deleteBuilding;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
