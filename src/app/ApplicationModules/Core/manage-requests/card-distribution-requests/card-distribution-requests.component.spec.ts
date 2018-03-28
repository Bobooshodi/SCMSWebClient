import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDistributionRequestsComponent } from './card-distribution-requests.component';

describe('CardDistributionRequestsComponent', () => {
  let component: CardDistributionRequestsComponent;
  let fixture: ComponentFixture<CardDistributionRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDistributionRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDistributionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
