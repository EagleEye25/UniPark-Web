import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestParkingComponent } from './request-parking.component';

describe('RequestParkingComponent', () => {
  let component: RequestParkingComponent;
  let fixture: ComponentFixture<RequestParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
