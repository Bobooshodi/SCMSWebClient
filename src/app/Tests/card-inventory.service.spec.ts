import { TestBed, inject } from '@angular/core/testing';

import { CardInventoryService } from '../Services/card-inventory.service';

describe('CardInventoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardInventoryService]
    });
  });

  it('should be created', inject([CardInventoryService], (service: CardInventoryService) => {
    expect(service).toBeTruthy();
  }));
});
