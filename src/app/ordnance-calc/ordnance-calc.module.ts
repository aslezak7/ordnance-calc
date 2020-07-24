import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdnanceCalcComponent } from './ordnance-calc.component';
import { SharedModule } from '../shared/shared.module';
import { SelectedAircraftListComponent } from './selected-aircraft-list/selected-aircraft-list.component';

@NgModule({
  declarations: [OrdnanceCalcComponent, SelectedAircraftListComponent],
  imports: [
    SharedModule
  ]
})
export class OrdnanceCalcModule { }
