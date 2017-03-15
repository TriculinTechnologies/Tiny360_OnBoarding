// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanDetailsComponent } from './plan-details.component';

// export 
const planDetailsRoutes: Routes = [
  {
    path: 'plan-details',
    component: PlanDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(planDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlanDetailsRoutingModule { }