import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnBoardingComponent } from './onBoarding.component';
import { onBoardingRoutingModule } from './onBoarding-routing.module';
import { BusinessDetailsModule }  from '../onBoarding/business-details/business-details.module';
import { PersonalDetailsModule }  from '../onBoarding/personal-details/personal-details.module';
import { RegistrationDetailsModule }  from '../onBoarding/registration-details/registration-details.module';
import { LoginModule }  from '../onBoarding/login/login.module';



@NgModule({
  imports: [
    CommonModule,
    onBoardingRoutingModule,
    BusinessDetailsModule,
    PersonalDetailsModule,
    RegistrationDetailsModule,
    LoginModule,
    
  ],
  declarations: [OnBoardingComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class OnBoardingModule { }