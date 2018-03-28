import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceCardRequestsComponent } from './replace-card-requests.component';

describe('ReplaceCardRequestsComponent', () => {
  let component: ReplaceCardRequestsComponent;
  let fixture: ComponentFixture<ReplaceCardRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceCardRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceCardRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
