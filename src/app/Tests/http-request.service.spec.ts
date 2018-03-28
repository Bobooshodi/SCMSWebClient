import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { APP_INITIALIZER } from '@angular/core';

import { ConfigLoader, AppModule } from '../app.module';
import { SettingsService } from '../Services/settings.service';
import { HttpRequestService } from '../Services/common/http-request.service';

describe('HttpRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        AppModule,
      ],
      providers: [
        HttpRequestService,
        SettingsService
      ]
    });
  });


  it('should be created', inject([Http, HttpRequestService], (http: Http, service: HttpRequestService) => {
    expect(service).toBeTruthy();
  }));

});
