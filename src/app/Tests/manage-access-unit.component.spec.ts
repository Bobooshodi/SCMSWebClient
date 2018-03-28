import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccessUnitComponent } from '../ApplicationModules/Core/manage-access-unit/manage-access-unit.component';

describe('ManageAccessUnitComponent', () => {
  let component: ManageAccessUnitComponent;
  let fixture: ComponentFixture<ManageAccessUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAccessUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
