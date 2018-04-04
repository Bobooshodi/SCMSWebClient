import { Injectable } from '@angular/core';
import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';
import { ApiEndPoints } from '../Shared/api-end-points';

@Injectable()
export class CardReplacementRequestsService extends AbstractService {

  getAllUrl = ApiEndPoints.allCardReplacements;
  getUrl = ApiEndPoints.getCardReplacement;
  postUrl = ApiEndPoints.createNewCardReplacement;
  putUrl = ApiEndPoints.updateCardReplacement;
  deleteUrl = ApiEndPoints.deleteCardReplacement;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
