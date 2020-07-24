import { Injectable } from '@angular/core';
import { Aircraft} from './aircraft';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { Weapon } from './weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  private weapons: Weapon[] = [
    {name: "LAU-61", weightPointCost: 2, ordnancePointCost: 1},
    {name: "Mk. 20 Rockeye", weightPointCost: 1, ordnancePointCost: 1}
  ]
  constructor() { }

  getWeapons(): Observable<Weapon[]> {
        //adding a slight delay to simulate a data server call
        return of(this.weapons).pipe(
          delay(1000)
        );
  }
}
