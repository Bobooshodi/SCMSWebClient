import { TestBed, inject } from '@angular/core/testing';

import { CardholderService } from '../Services/cardholder.service';

describe('CardholderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardholderService]
    });
  });

  it('should be created', inject([CardholderService], (service: CardholderService) => {
    expect(service).toBeTruthy();
  }));
});
