import { Injectable } from '@angular/core';

import { ApiEndPoints } from '../Shared/api-end-points';
import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class CardInventoryService extends AbstractService {

  getAllUrl = ApiEndPoints.allCardInventories;
  getUrl = ApiEndPoints.getCardInventory;
  postUrl = ApiEndPoints.createNewCardInventory;
  putUrl = ApiEndPoints.updateCardInventory;
  deleteUrl = ApiEndPoints.deleteCardInventory;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
