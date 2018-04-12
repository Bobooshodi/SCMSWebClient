import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HttpRequestService } from './http-request.service';
import { CardType } from '../../Models/Domain/card-type.model';
import { ApiEndPoints } from '../../Shared/api-end-points';


@Injectable()
export abstract class AbstractService {

  abstract readonly getAllUrl: string;
  abstract readonly getUrl: string;
  abstract readonly postUrl: string;
  abstract readonly putUrl: string;
  abstract readonly deleteUrl: string;

  constructor(private httpService: HttpRequestService) { }

  getAll<T>(): Observable<T[]> {
    return this.httpService.getAllAsync<T>(this.getAllUrl);
  }

  get<T>(id: string): Observable<T> {
    const url = this.getUrl + id;
    return this.httpService.getAsync<T>(url);
  }

  update<T>(updatedObject: T): Observable<T> {
    return this.httpService.putAsync<T>(
      updatedObject, this.putUrl);
  }

  create<T>(newObject: T): Observable<T> {
    return this.httpService.postAsync<T>(
      newObject, this.postUrl);
  }

  delete<T>(id: string): Observable<T> {
    const url = this.deleteUrl + id;
    return this.httpService.deleteAsync<T>(url);
  }

}
