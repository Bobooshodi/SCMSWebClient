import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBuildingComponent } from '../ApplicationModules/Core/manage-building/manage-building.component';
import { AppModule } from '../app.module';

describe('ManageBuildingComponent', () => {
  let component: ManageBuildingComponent;
  let fixture: ComponentFixture<ManageBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
