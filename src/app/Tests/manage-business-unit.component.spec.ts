import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBusinessUnitComponent } from '../ApplicationModules/Core/manage-business-unit/manage-business-unit.component';

describe('ManageBusinessUnitComponent', () => {
  let component: ManageBusinessUnitComponent;
  let fixture: ComponentFixture<ManageBusinessUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBusinessUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
