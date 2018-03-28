import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInventoryComponent } from '../ApplicationModules/Core/card-inventory/card-inventory.component';

describe('CardInventoryComponent', () => {
  let component: CardInventoryComponent;
  let fixture: ComponentFixture<CardInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
