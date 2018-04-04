import { Injectable } from '@angular/core';
import { ApiEndPoints } from '../Shared/api-end-points';
import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class PersonalisationRequestsService extends AbstractService {

  getAllUrl = ApiEndPoints.allPersonalisationRequests;
  getUrl = ApiEndPoints.getPersonalisationRequest;
  postUrl = ApiEndPoints.createNewPersonalisationRequest;
  putUrl = ApiEndPoints.updatePersonalisationRequest;
  deleteUrl = ApiEndPoints.deletePersonalisationRequest;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
