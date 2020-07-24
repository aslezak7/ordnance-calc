import { Component, OnInit, Input } from '@angular/core';
import { Aircraft } from '../aircraft';
import { WeaponService } from '../weapon.service';
import { Weapon } from '../weapon';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectedAircraft } from '../selected-aircraft';

@Component({
  selector: 'app-selected-aircraft-list',
  templateUrl: './selected-aircraft-list.component.html',
  styleUrls: ['./selected-aircraft-list.component.scss']
})
export class SelectedAircraftListComponent implements OnInit {
  @Input() selectedAircraft: SelectedAircraft[];
  weapons: Weapon[];
  selectedWeapons: Weapon[];
  loadingWeapons: boolean = false;
  addWeaponForm = new FormGroup({
    weaponToAdd: new FormControl()
  });
  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    this.loadingWeapons = true;
    this.selectedWeapons = [];
    this.weaponService.getWeapons().subscribe(weapons => {
      this.weapons = weapons;
      this.loadingWeapons = false;
      this.addWeaponForm.setValue({
        weaponToAdd: this.weapons[0]
      });
    });

  }

  onWeaponToAddSubmit(selectedAircraftIndex: number): void {
    console.log(this.addWeaponForm.value.weaponToAdd);
    this.selectedWeapons.push(this.addWeaponForm.value.weaponToAdd);
    console.log(this.selectedAircraft[selectedAircraftIndex].weapons);
  }

}
