// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanCheckingComponent } from './plan-checking.component';

// export 
const planCheckingRoutes: Routes = [
  {
    path: 'plan-checking',
    component: PlanCheckingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(planCheckingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlanCheckingRoutingModule { }