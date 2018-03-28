import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistRequestsComponent } from './blacklist-requests.component';

describe('BlacklistRequestsComponent', () => {
  let component: BlacklistRequestsComponent;
  let fixture: ComponentFixture<BlacklistRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});