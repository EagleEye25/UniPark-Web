import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedParkingComponent } from './view-assigned-parking.component';

describe('ViewAssignedParkingComponent', () => {
  let component: ViewAssignedParkingComponent;
  let fixture: ComponentFixture<ViewAssignedParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssignedParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignedParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
