import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOperatorsComponent } from '../ApplicationModules/Core/manage-operators/manage-operators.component';

describe('ManageOperatorsComponent', () => {
  let component: ManageOperatorsComponent;
  let fixture: ComponentFixture<ManageOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
