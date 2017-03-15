import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanSelectionComponent }  from './planselection.component';
import { PlanDetailsComponent }  from './plan-details/plan-details.component';
import { PlanCheckingComponent }  from './plan-checking/plan-checking.component';
import {PaymentComponent} from './payment/payment.component';
import {SuccessComponent} from './success/success.component';
import { TrialPlanDetailsComponent }  from './trial-plan-details/trial-plan-details.component';
import { AuthGuard }                from '../auth-guard.service';
//import { AuthService }      from '../auth.service';
const onBoardingRoutes: Routes = [
   {
    path: 'planselection',
    component: PlanSelectionComponent,
       canActivate: [AuthGuard],
  children: [                
  {
    path: '',
    component: PlanSelectionComponent,
    
  },     

  {
    path: 'plan-details',
    component: PlanDetailsComponent,
     
  },
  {
    path: 'plan-checking',
    component: PlanCheckingComponent,
   
  },
   {
    path: 'payment',
    component: PaymentComponent,
    
  },
   {
    path: 'success',
    component: SuccessComponent,
   
  },
   {
    path: 'trial-plan-details',
    component: TrialPlanDetailsComponent,
  }
 
]
},
{ path: '', redirectTo: '/planselection', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forChild(onBoardingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class planSelectionRoutingModule { }
