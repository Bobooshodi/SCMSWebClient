import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardholdersComponent } from '../ApplicationModules/Core/manage-cardholders/manage-cardholders.component';

describe('ManageCardholdersComponent', () => {
  let component: ManageCardholdersComponent;
  let fixture: ComponentFixture<ManageCardholdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardholdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
