import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrialPlanDetailsComponent }       from './trial-plan-details.component';


const successRoutes: Routes = [
  { 
    path: 'trial-plan-details', 
    component: TrialPlanDetailsComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(successRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class TrialPlanDetailsRoutingModule {}