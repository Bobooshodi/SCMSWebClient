import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Server } from '../Models/Application/server.model';
import { ApplicationSettings } from '../Models/Application/application-settings.model';

@Injectable()
export class SettingsService {

  private appSettings: ApplicationSettings;

  constructor(private http: Http) { }

  loadSettings(url: string) {
    return new Promise((resolve) => {
      this.http.get(url).map(res => res.json())
      .subscribe(settings => {
        const tmp = new Server(settings.ipAddress, settings.port, settings.protocol);
        this.appSettings = new ApplicationSettings(tmp);
        resolve();
      });
    });
  }

  loadAppSettings(): ApplicationSettings {
    return this.appSettings;
  }
}
