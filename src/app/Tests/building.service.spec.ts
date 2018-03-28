import { TestBed, inject } from '@angular/core/testing';

import { BuildingService } from '../Services/building.service';
import { AppModule } from '../app.module';

describe('ManageBuildingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [BuildingService]
    });
  });

  it('should be created', inject([BuildingService], (service: BuildingService) => {
    expect(service).toBeTruthy();
  }));
});
