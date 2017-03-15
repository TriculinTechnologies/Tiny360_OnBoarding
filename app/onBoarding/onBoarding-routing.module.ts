import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnBoardingComponent } from './onBoarding.component';
import { BusinessDetailsComponent }  from '../onBoarding/business-details/business-details.component';
import { PersonalDetailsComponent }  from '../onBoarding/personal-details/personal-details.component';
import { RegistrationDetailsComponent }  from '../onBoarding/registration-details/registration-details.component';
import { LoginComponent }  from '../onBoarding/login/login.component';
import { Tab1Component }  from '../admin/dashboard/tab1/tab1.component';
import { Tab2Component }    from '../admin/dashboard/tab2/tab2.component';
import { AuthGuard }                from '../auth-guard.service';
//import { AuthService }      from '../auth.service';
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
  {
    path: 'login',
    component: LoginComponent,
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
