import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniparkPageComponent } from './unipark-page.component';

describe('UniparkPageComponent', () => {
  let component: UniparkPageComponent;
  let fixture: ComponentFixture<UniparkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniparkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniparkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
