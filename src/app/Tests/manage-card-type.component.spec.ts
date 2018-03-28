import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ManageCardTypeComponent } from '../ApplicationModules/Core/manage-card-type/manage-card-type.component';
import { CardTypeService } from './../Services/card-type.service';
import { AppModule } from '../app.module';

describe('ManageCardTypeComponent', () => {
  let component: ManageCardTypeComponent;
  let fixture: ComponentFixture<ManageCardTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        CardTypeService
      ],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
