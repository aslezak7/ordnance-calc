import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdnanceCalcComponent } from './ordnance-calc/ordnance-calc.component';

const routes: Routes = [{
  path: '', component: OrdnanceCalcComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
