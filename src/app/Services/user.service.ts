import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

import { ApiEndPoints } from './../Shared/api-end-points';
import { User } from './../Models/Domain/user.model';
import { SettingsService } from './settings.service';

@Injectable()
export class UserService {

  jwtHelper: JwtHelper = new JwtHelper();
  baseApiEndpoint: string;

  constructor(private httpService: HttpClient, private settingsService: SettingsService) {
    this.baseApiEndpoint = settingsService.loadAppSettings().server.fullUrl;
   }

  login(username: string, password: string) {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('client_id', 'web')
    .set('grant_type', 'password');

    return this.httpService.post<User>(this.baseApiEndpoint + ApiEndPoints.login, body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  loggedIn() {
    const loggedInUser: User = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser || !loggedInUser.access_token) {
      return false;
    } else {
      /* console.log(
        this.jwtHelper.decodeToken(loggedInUser.access_token),
        this.jwtHelper.getTokenExpirationDate(loggedInUser.access_token),
        this.jwtHelper.isTokenExpired(loggedInUser.access_token)
      ); */

      return this.jwtHelper.isTokenExpired(loggedInUser.access_token) ? false : true;
    }
  }

  refreshUserToken() {
  }

  logOut() {
    if (localStorage.length > 0) {
      localStorage.clear();
    }
  }

  getLoggedInUser(): User {
    if (localStorage.getItem('loggedInUser')) {
      return JSON.parse(localStorage.getItem('loggedInUser'));
    } else {
      throw new Error('No user logged in');
    }
  }
}
