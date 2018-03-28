import { TestBed, inject } from '@angular/core/testing';

import { CardService } from '../Services/card.service';

describe('CardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
  });

  it('should be created', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
});
