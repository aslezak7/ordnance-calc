import { Component, OnInit, Input } from "@angular/core";
import { Aircraft } from "../aircraft";
import { Weapon } from "../weapon";
import { FormGroup, FormControl } from "@angular/forms";
import { WeaponService } from "../weapon.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-selected-aircraft-item",
  templateUrl: "./selected-aircraft-item.component.html",
  styleUrls: ["./selected-aircraft-item.component.scss"],
})
export class SelectedAircraftItemComponent implements OnInit {
  @Input() aircraft: Aircraft;
  weapons: Weapon[];
  selectedWeapons: Weapon[];
  ordnanceTotal: number = 0;
  specialOpsPoints: number = 1;
  loadingWeapons: boolean = false;
  addWeaponForm = new FormGroup({
    weaponToAdd: new FormControl(),
  });
  addWeaponDisabled: boolean = false;
  constructor(private weaponService: WeaponService) {}

  ngOnInit() {
    this.loadingWeapons = true;
    this.selectedWeapons = [];
    this.weaponService.getWeapons().subscribe((weapons) => {
      this.weapons = weapons;
      this.loadingWeapons = false;
      this.addWeaponForm.setValue({
        weaponToAdd: this.weapons[0],
      });
      this.calculateAvailableWeapons();
    });
  }

  onWeaponToAddSubmit(selectedAircraftIndex: number): void {
    const weapon = this.addWeaponForm.value.weaponToAdd;
    this.selectedWeapons.push(weapon);
    this.aircraft.weightPoints =
      this.aircraft.weightPoints - weapon.weightPointCost;
    this.ordnanceTotal = this.ordnanceTotal + weapon.ordnancePointCost;
    this.calculateSpecOpsPoints();
    this.calculateAvailableWeapons();
  }

  removeWeapon(weaponName: string): void {
    //Get index of weapon that matches name passed.
    let searchResult = this.selectedWeapons.findIndex((weapon) => {
      return weapon.name == weaponName;
    });
    //if found recalculate the weight points and then remove it from the selected weapons array
    if (searchResult != -1) {
      this.aircraft.weightPoints += this.selectedWeapons[
        searchResult
      ].weightPointCost;
      this.ordnanceTotal -= this.selectedWeapons[
        searchResult
      ].ordnancePointCost;
      this.calculateSpecOpsPoints();
      this.selectedWeapons.splice(searchResult, 1);
      this.calculateAvailableWeapons();
    }
  }

  calculateSpecOpsPoints(): void {
    this.specialOpsPoints = Math.floor(this.ordnanceTotal / 10) + 1;
  }

  calculateAvailableWeapons(): void {
    for (const weapon of this.weapons) {
      if (this.aircraft.weightPoints - weapon.weightPointCost < 0) {
        weapon.disabled = true;
      } else {
        weapon.disabled = false;
      }

      if (this.aircraft.weightPoints === 0) {
        this.addWeaponDisabled = true;
      } else {
        this.addWeaponDisabled = false;
      }
    }
  }
}
