import { Injectable } from '@angular/core';

import { ApiEndPoints } from '../Shared/api-end-points';
import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class CardService extends AbstractService {

  getAllUrl = ApiEndPoints.allCards;
  getUrl = ApiEndPoints.getCard;
  postUrl = ApiEndPoints.createNewCard;
  putUrl = ApiEndPoints.updateCard;
  deleteUrl = ApiEndPoints.deleteCard;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
