import { Injectable } from '@angular/core';

import { ApiEndPoints } from './../Shared/api-end-points';

import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';

@Injectable()
export class CompanyService extends AbstractService {

  getAllUrl = ApiEndPoints.allCompanies;
  getUrl = ApiEndPoints.getCompany;
  postUrl = ApiEndPoints.createNewCompany;
  putUrl = ApiEndPoints.updateCompany;
  deleteUrl = ApiEndPoints.deleteCompany;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
