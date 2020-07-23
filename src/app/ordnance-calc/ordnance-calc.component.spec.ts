import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdnanceCalcComponent } from './ordnance-calc.component';

describe('OrdnanceCalcComponent', () => {
  let component: OrdnanceCalcComponent;
  let fixture: ComponentFixture<OrdnanceCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdnanceCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdnanceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
