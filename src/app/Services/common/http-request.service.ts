import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../user.service';
import { SettingsService } from '../application/settings.service';


@Injectable()
export class HttpRequestService {

  baseServerUrl: string;

  constructor(private httpClient: HttpClient, settingsService: SettingsService,
      private userService: UserService) {
      this.baseServerUrl = settingsService.loadAppSettings().server.fullUrl;
   }

  putAsync<T>(model: any, url: string) {
    const token = this.tokenAvailable();
    if (token) {
      return this.httpClient
      .put<T>(this.baseServerUrl + url, model,
        {
          headers: new HttpHeaders().set('Authorization', `bearer: ${token}`)
        })
      .catch(this.handleError);
    } else {
      return this.httpClient
      .put<T>(this.baseServerUrl + url, model)
      .catch(this.handleError);
    }
  }

  postAsync<T>(model: any, url: string) {
    const token = this.tokenAvailable();
    if (token) {
      return this.httpClient
      .post<T>(this.baseServerUrl + url, model,
        {
          headers: new HttpHeaders().set('Authorization', `bearer: ${token}`)
        })
      .catch(this.handleError);
    } else {
      return this.httpClient
      .post<T>(this.baseServerUrl + url, model)
      .catch(this.handleError);
    }
  }

  getAsync<T>(url: string) {
    const token = this.tokenAvailable();
    if (token) {
      return this.httpClient
      .get<T>(this.baseServerUrl + url,
        {
          headers: new HttpHeaders().set('Authorization', `bearer: ${token}`)
        })
      .catch(this.handleError);
    } else {
      return this.httpClient
      .get<T>(this.baseServerUrl + url)
      .catch(this.handleError);
    }
  }

  getAllAsync<T>(url: string) {
    const token = this.tokenAvailable();
    if (token) {
      return this.httpClient
      .get<T>(this.baseServerUrl + url,
        {
          headers: new HttpHeaders().set('Authorization', `bearer: ${token}`)
        })
      .catch(this.handleError);
    } else {
      return this.httpClient
      .get<T>(this.baseServerUrl + url)
      .catch(this.handleError);
    }
  }

  deleteAsync<T>(url: string) {
    const token = this.tokenAvailable();
    if (token) {
      return this.httpClient
      .delete<T>(this.baseServerUrl + url,
        {
          headers: new HttpHeaders().set('Authorization', `bearer: ${token}`)
        })
      .catch(this.handleError);
    } else {
      return this.httpClient
      .delete<T>(this.baseServerUrl + url)
      .catch(this.handleError);
    }
  }

  handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  private tokenAvailable() {
    try {
      return this.userService.getLoggedInUser().access_token;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
