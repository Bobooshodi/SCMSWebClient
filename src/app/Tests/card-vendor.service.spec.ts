import { TestBed, inject } from '@angular/core/testing';

import { CardVendorService } from '../Services/card-vendor.service';

describe('CardVendorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardVendorService]
    });
  });

  it('should be created', inject([CardVendorService], (service: CardVendorService) => {
    expect(service).toBeTruthy();
  }));
});
