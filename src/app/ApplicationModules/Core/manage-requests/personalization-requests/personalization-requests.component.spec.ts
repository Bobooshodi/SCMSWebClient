import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizationRequestsComponent } from './personalization-requests.component';

describe('PersonalizationRequestsComponent', () => {
  let component: PersonalizationRequestsComponent;
  let fixture: ComponentFixture<PersonalizationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
