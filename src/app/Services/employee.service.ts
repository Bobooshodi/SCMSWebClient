import { Injectable } from '@angular/core';
import { AbstractService } from './common/abstract.service';
import { HttpRequestService } from './common/http-request.service';
import { ApiEndPoints } from '../Shared/api-end-points';

@Injectable()
export class EmployeeService extends AbstractService {

  getAllUrl = ApiEndPoints.allEmployees;
  getUrl = ApiEndPoints.getEmployee;
  postUrl = ApiEndPoints.createNewEmployee;
  putUrl = ApiEndPoints.updateEmployee;
  deleteUrl = ApiEndPoints.deleteEmployee;

  constructor(httpService: HttpRequestService) { super(httpService); }

}
