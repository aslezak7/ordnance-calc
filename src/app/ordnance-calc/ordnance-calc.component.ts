import { Component, OnInit } from '@angular/core';
import { Aircraft } from './aircraft';
import { AircraftService } from './aircraft.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ordnance-calc',
  templateUrl: './ordnance-calc.component.html',
  styleUrls: ['./ordnance-calc.component.scss']
})
export class OrdnanceCalcComponent implements OnInit {
  aircrafts: Aircraft[];
  selectedAircraft: Aircraft[] = [];
  loadingAircrafts: boolean = false;
  addAircraftForm = new FormGroup({
    aircraftToAdd: new FormControl()
  });
  constructor(private aircraftService: AircraftService) { }

  ngOnInit(): void {
    this.loadingAircrafts = true;
    this.selectedAircraft = [];
    this.aircraftService.getAircrafts().subscribe(aircrafts => {
      this.aircrafts = aircrafts;
      this.loadingAircrafts = false;
      this.addAircraftForm.setValue({
        aircraftToAdd: this.aircrafts[0]
      });
    });
  }

  onAircraftToAddSubmit(): void {
    console.log(this.addAircraftForm.value.aircraftToAdd);
    this.selectedAircraft.push(this.addAircraftForm.value.aircraftToAdd);
    
  }

}
