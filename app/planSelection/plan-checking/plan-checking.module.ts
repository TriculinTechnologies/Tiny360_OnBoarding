import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanCheckingComponent } from './plan-checking.component';
import { PlanCheckingRoutingModule } from './plan-checking-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlanCheckingRoutingModule
  ],
 exports:[PlanCheckingComponent],
 declarations: [PlanCheckingComponent]
})
export class PlanCheckingModule { }