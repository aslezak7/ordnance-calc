import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAircraftListComponent } from './selected-aircraft-list.component';

describe('SelectedAircraftListComponent', () => {
  let component: SelectedAircraftListComponent;
  let fixture: ComponentFixture<SelectedAircraftListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAircraftListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAircraftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
