import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, LoadingIndicatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    LoadingIndicatorComponent,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
