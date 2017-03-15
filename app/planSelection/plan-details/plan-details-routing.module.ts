// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanDetailsComponent } from './plan-details.component';
import { AuthGuard }                from '../../auth-guard.service';
// export 
const planDetailsRoutes: Routes = [
  {
    path: 'plan-details',
    component: PlanDetailsComponent,
     canActivate: [AuthGuard]
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