import { TestBed, inject } from '@angular/core/testing';

import { AccessUnitService } from '../Services/access-unit.service';

describe('AccessUnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessUnitService]
    });
  });

  it('should be created', inject([AccessUnitService], (service: AccessUnitService) => {
    expect(service).toBeTruthy();
  }));
});
