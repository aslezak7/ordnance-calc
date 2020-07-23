import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdnanceCalcComponent } from './ordnance-calc.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrdnanceCalcComponent],
  imports: [
    SharedModule
  ]
})
export class OrdnanceCalcModule { }
