import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnBoardingComponent } from './onBoarding.component';
import { onBoardingRoutingModule } from './onBoarding-routing.module';

import { BusinessDetailsModule }  from '../onBoarding/business-details/business-details.module';
import { PersonalDetailsModule }  from '../onBoarding/personal-details/personal-details.module';
import { RegistrationDetailsModule }  from '../onBoarding/registration-details/registration-details.module';
import { PlanDetailsModule }  from '../onBoarding/plan-details/plan-details.module';
import { LoginModule }  from '../onBoarding/login/login.module';
import { PlanCheckingModule }  from '../onBoarding/plan-checking/plan-checking.module';
import { PaymentModule }  from '../onBoarding/payment/payment.module';
import { SuccessModule }  from '../onBoarding/success/success.module';
import { TrialPlanDetailsModule }  from '../onBoarding/trial-plan-details/trial-plan-details.module';

@NgModule({
  imports: [
    CommonModule,
    onBoardingRoutingModule,
    BusinessDetailsModule,
    PersonalDetailsModule,
    RegistrationDetailsModule,
    PlanDetailsModule,
    LoginModule,
    PlanCheckingModule,
    PaymentModule,
    SuccessModule,
    TrialPlanDetailsModule
  ],
  declarations: [OnBoardingComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class OnBoardingModule { }