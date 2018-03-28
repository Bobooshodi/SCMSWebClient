import { Injectable } from '@angular/core';

import { ApiEndPoints } from '../Shared/api-end-points';
import { HttpRequestService } from './common/http-request.service';
import { AbstractService } from './common/abstract.service';
import { Cardholder } from './../Models/Domain/cardholder.model';
import { RandomDataGenerator } from './../Shared/random-data-generator';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardholderService extends AbstractService {

  getAllUrl = ApiEndPoints.allCardholders;
  getUrl = ApiEndPoints.getCardholder;
  postUrl = ApiEndPoints.createNewCardholder;
  putUrl = ApiEndPoints.updateCardholder;
  deleteUrl = ApiEndPoints.deleteCardholder;

  constructor(httpService: HttpRequestService) { super(httpService); }
}
