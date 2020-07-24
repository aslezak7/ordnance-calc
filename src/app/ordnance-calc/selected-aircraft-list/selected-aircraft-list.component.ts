import { Component, OnInit, Input } from '@angular/core';
import { SelectedAircraft } from '../selected-aircraft';

@Component({
  selector: 'app-selected-aircraft-list',
  templateUrl: './selected-aircraft-list.component.html',
  styleUrls: ['./selected-aircraft-list.component.scss']
})
export class SelectedAircraftListComponent implements OnInit {
  @Input() selectedAircraft: SelectedAircraft[];
  constructor() { }
  ngOnInit() {

  }

}
