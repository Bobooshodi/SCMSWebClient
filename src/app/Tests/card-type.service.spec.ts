import { TestBed, inject } from '@angular/core/testing';

import { CardTypeService } from '../Services/card-type.service';
import { AppModule } from '../app.module';
import { CardType } from '../Models/Domain/card-type.model';
import { SHCCardType } from '../Models/Enums/shc-card-type.enum';

describe('CardTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],
      providers: []
    });
  });

  it('should be created', inject([CardTypeService], (service: CardTypeService) => {
    expect(service).toBeTruthy();
  }));

  it('get all cardTypes', inject([CardTypeService], (service: CardTypeService) => {
    let cardTypes: CardType[];
    service.getAll<CardType>()
    .subscribe( (data) => {
      cardTypes = data;
      expect(cardTypes.length).toBeGreaterThan(1);
    });
  }));

  it('should add a new card type', inject([CardTypeService], (service: CardTypeService) => {
    const newCardType = new CardType();
    newCardType.businessUnits = [];
    newCardType.cardType = SHCCardType.TENANT;
    newCardType.description = 'Unit test add';
    newCardType.id = '9';
    newCardType.isPermanent = true;
    newCardType.name = 'Unit Test Add';

    let addedCardType;

    try {
      service.create(newCardType)
    .subscribe( (cardType) => {
      addedCardType = cardType;
      expect(addedCardType).toBeDefined();
    });
    }catch (e) {
      console.log(`Server Error: ${e}`);
    }

  }));
});
