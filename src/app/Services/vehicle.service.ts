import { Injectable } from '@angular/core';

import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';
import { ApiEndPoints } from '../Shared/api-end-points';

@Injectable()
export class VehicleService extends AbstractService {

  getAllUrl = ApiEndPoints.allVehicles;
  getUrl = ApiEndPoints.getVehicle;
  postUrl = ApiEndPoints.createNewVehicle;
  putUrl = ApiEndPoints.updateVehicle;
  deleteUrl = ApiEndPoints.deleteVehicle;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
