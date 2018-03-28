import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShcTenantsComponent } from './manage-shc-tenants.component';

describe('ManageShcTenantsComponent', () => {
  let component: ManageShcTenantsComponent;
  let fixture: ComponentFixture<ManageShcTenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShcTenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShcTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
