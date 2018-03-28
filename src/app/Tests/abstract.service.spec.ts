import { TestBed, inject } from '@angular/core/testing';

import { AbstractService } from '../Services/common/abstract.service';
import { AppModule } from '../app.module';

describe('AbstractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [AbstractService]
    });
  });

  it('should be created', inject([AbstractService], (service: AbstractService) => {
    expect(service).toBeTruthy();
  }));
});
