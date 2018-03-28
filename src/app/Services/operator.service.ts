import { Injectable } from '@angular/core';

import { AbstractService } from './common/abstract.service';
import { ApiEndPoints } from '../Shared/api-end-points';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class OperatorService extends AbstractService {

  getAllUrl = ApiEndPoints.allOperators;
  getUrl = ApiEndPoints.getOperator;
  postUrl = ApiEndPoints.createNewOperator;
  putUrl = ApiEndPoints.updateOperator;
  deleteUrl = ApiEndPoints.deleteOperator;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
