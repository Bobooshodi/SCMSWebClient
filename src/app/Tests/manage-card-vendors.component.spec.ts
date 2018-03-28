import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardVendorsComponent } from '../ApplicationModules/Core/manage-card-vendors/manage-card-vendors.component';

describe('ManageCardVendorsComponent', () => {
  let component: ManageCardVendorsComponent;
  let fixture: ComponentFixture<ManageCardVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
