import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfringementsComponent } from './infringements.component';

describe('InfringementsComponent', () => {
  let component: InfringementsComponent;
  let fixture: ComponentFixture<InfringementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfringementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfringementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
