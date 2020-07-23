import { Injectable } from '@angular/core';
import { Aircraft} from './aircraft';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  private aircrafts: Aircraft[] = [
    {name: "A-10C", weightPoints: 14},
    {name: "A-10A", weightPoints: 14}
  ]
  constructor() { }

  getAircrafts(): Observable<Aircraft[]> {
    //adding a slight delay to simulate a data server call
    return of(this.aircrafts).pipe(
      delay(1000)
    );
  }
}
