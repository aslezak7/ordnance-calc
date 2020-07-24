import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAircraftItemComponent } from './selected-aircraft-item.component';

describe('SelectedAircraftItemComponent', () => {
  let component: SelectedAircraftItemComponent;
  let fixture: ComponentFixture<SelectedAircraftItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAircraftItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAircraftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
