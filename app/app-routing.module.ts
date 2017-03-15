import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { OnBoardingComponent } from './onBoarding/onBoarding.component';
import { SharedComponent } from './shared/shared.component';
import {  ServiceErrorPageComponent } from './shared/serviceErrorPage/service-error-page.component';  
// import { NavbarComponent } from './shared/navbar/navbar.component';

// import { BusinessDetailsComponent }  from './onBoarding/business-details/business-details.component';
// import { PersonalDetailsComponent }  from './onBoarding/personal-details/personal-details.component';
// import { RegistrationDetailsComponent }  from './onBoarding/registration-details/registration-details.component';
// import { LoginComponent }  from './onBoarding/login/login.component';
// import { PlanDetailsComponent }  from './onBoarding/plan-details/plan-details.component';

export class share{
route:any
// constructor(){
//   this.route="test";
// }

}
const routename=new share();
const route=routename.route;
const appRoutes: Routes = [  
  // {
  //   path: '',
  //   loadChildren: 'app/onBoarding/onBoarding.module#OnBoardingModule',
  // },
  {
    path: 'onboarding',
    loadChildren: 'app/onBoarding/onBoarding.module#OnBoardingModule',
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
  },
  { 
    path: 'error-page',
    component: ServiceErrorPageComponent 
  },
  // {
  //   path: 'tiny360/party_id',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  // },


  //  {
  //   path: 'business-details',
  //   component: BusinessDetailsComponent,
  // },
  // {
  //   path: 'personal-details',
  //   component: PersonalDetailsComponent,
  // },
  // {
  //   path: 'registration-details',
  //   component: RegistrationDetailsComponent,
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'plan-details',
  //   component: PlanDetailsComponent,
  // },
  // { path: '', redirectTo: '/onboarding/business-details', pathMatch: 'full'},
  { path: '', redirectTo: '/onboarding', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
  
]
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}