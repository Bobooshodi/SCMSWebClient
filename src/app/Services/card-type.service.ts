import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { CardType } from '../Models/Domain/card-type.model';
import { ApiEndPoints } from '../Shared/api-end-points';
import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class CardTypeService extends AbstractService {

  getAllUrl = ApiEndPoints.allCardTypes;
  getUrl = ApiEndPoints.getCardType;
  postUrl = ApiEndPoints.createNewCardType;
  putUrl = ApiEndPoints.updateCardType;
  deleteUrl = ApiEndPoints.deleteCardType;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
