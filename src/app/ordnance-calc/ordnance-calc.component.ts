import { Component, OnInit } from '@angular/core';
import { Aircraft } from './aircraft';
import { AircraftService } from './aircraft.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectedAircraft } from './selected-aircraft';

@Component({
  selector: 'app-ordnance-calc',
  templateUrl: './ordnance-calc.component.html',
  styleUrls: ['./ordnance-calc.component.scss']
})
export class OrdnanceCalcComponent implements OnInit {
  aircrafts: Aircraft[];
  selectedAircraft: SelectedAircraft[] = [];
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
    let newAircraft: SelectedAircraft = {
      name: '',
      weightPoints: 0,
      weapons: []
    }
    Object.assign(newAircraft, this.addAircraftForm.value.aircraftToAdd);
    newAircraft.weapons = [];
    this.selectedAircraft.push(newAircraft);
    
  }

}
