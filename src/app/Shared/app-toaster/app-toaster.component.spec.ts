import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToasterComponent } from './app-toaster.component';

describe('AppToasterComponent', () => {
  let component: AppToasterComponent;
  let fixture: ComponentFixture<AppToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
