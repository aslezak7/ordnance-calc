import { Component, OnInit, Input } from '@angular/core';
import { Aircraft } from '../aircraft';
import { Weapon } from '../weapon';
import { FormGroup, FormControl } from '@angular/forms';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-selected-aircraft-item',
  templateUrl: './selected-aircraft-item.component.html',
  styleUrls: ['./selected-aircraft-item.component.scss']
})
export class SelectedAircraftItemComponent implements OnInit {
  @Input() aircraft: Aircraft;
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
    const weapon = this.addWeaponForm.value.weaponToAdd;
    this.selectedWeapons.push(weapon);
  }

}
