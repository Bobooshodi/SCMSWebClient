import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { SettingsService } from '../Services/settings.service';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [SettingsService]
    });
  });

  it('should be created', inject([Http, SettingsService], (http: Http, service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
