import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnBoardingComponent } from './onBoarding.component';

import { BusinessDetailsComponent }  from '../onBoarding/business-details/business-details.component';
import { PersonalDetailsComponent }  from '../onBoarding/personal-details/personal-details.component';
import { RegistrationDetailsComponent }  from '../onBoarding/registration-details/registration-details.component';
import { LoginComponent }  from '../onBoarding/login/login.component';
import { PlanDetailsComponent }  from '../onBoarding/plan-details/plan-details.component';
import { PlanCheckingComponent }  from '../onBoarding/plan-checking/plan-checking.component';
import { PaymentComponent }  from '../onBoarding/payment/payment.component';
import { SuccessComponent }  from '../onBoarding/success/success.component';
import { TrialPlanDetailsComponent }  from '../onBoarding/trial-plan-details/trial-plan-details.component';

import { Tab1Component }  from '../admin/dashboard/tab1/tab1.component';
import { Tab2Component }    from '../admin/dashboard/tab2/tab2.component';

// import { AuthGuard }                from '../auth-guard.service';

const onBoardingRoutes: Routes = [
   {
    path: '',
    component: OnBoardingComponent,
    // canActivate: [AuthGuard],
  children: [                
  {
    path: '',
    component: LoginComponent,
  },     
  {
    path: 'business-details',
    component: BusinessDetailsComponent,
  },
  {
    path: 'personal-details',
    component: PersonalDetailsComponent,
  },
  {
    path: 'registration-details',
    component: RegistrationDetailsComponent,
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
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
{ path: '', redirectTo: '/onboarding', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forChild(onBoardingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class onBoardingRoutingModule { }
 