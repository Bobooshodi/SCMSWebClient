import { Injectable } from '@angular/core';
import { AbstractService } from './common/abstract.service';
import { ApiEndPoints } from '../Shared/api-end-points';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class CardRequestsService extends AbstractService {

  getAllUrl = ApiEndPoints.allCardRequests;
  getUrl = ApiEndPoints.getCardRequest;
  postUrl = ApiEndPoints.createNewCardRequest;
  putUrl = ApiEndPoints.updateCardRequest;
  deleteUrl = ApiEndPoints.deleteCardRequest;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
