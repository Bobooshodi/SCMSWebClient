import { Injectable } from '@angular/core';

import { ApiEndPoints } from '../Shared/api-end-points';
import { HttpRequestService } from './common/http-request.service';
import { AbstractService } from './common/abstract.service';

@Injectable()
export class CardVendorService extends AbstractService {

  getAllUrl = ApiEndPoints.allCardVendors;
  getUrl = ApiEndPoints.getCardVendor;
  postUrl = ApiEndPoints.createNewCardVendor;
  putUrl = ApiEndPoints.updateCardVendor;
  deleteUrl = ApiEndPoints.deleteCardVendor;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
