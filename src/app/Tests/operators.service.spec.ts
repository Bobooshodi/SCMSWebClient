import { TestBed, inject } from '@angular/core/testing';

import { OperatorService } from '../Services/operator.service';

describe('OperatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorService]
    });
  });

  it('should be created', inject([OperatorService], (service: OperatorService) => {
    expect(service).toBeTruthy();
  }));
});
