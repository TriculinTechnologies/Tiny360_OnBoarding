import { NgModule }             from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { OnBoardingComponent } from './onBoarding/onBoarding.component';
import { SharedComponent } from './shared/shared.component';  
import { AuthService }      from './auth.service';
import { AuthGuard }      from './auth-guard.service';
 import { PlanSelectionComponent } from  './planSelection/planselection.component';

// import { NavbarComponent } from './shared/navbar/navbar.component';

// import { BusinessDetailsComponent }  from './onBoarding/business-details/business-details.component';
// import { PersonalDetailsComponent }  from './onBoarding/personal-details/personal-details.component';
// import { RegistrationDetailsComponent }  from './onBoarding/registration-details/registration-details.component';
// import { LoginComponent }  from './onBoarding/login/login.component';
// import { PlanDetailsComponent }  from './onBoarding/plan-details/plan-details.component';
const appRoutes: Routes = [  
  {
    path: 'onboarding',
    loadChildren: 'app/onBoarding/onBoarding.module#OnBoardingModule',
    //canActivate: [ AuthGuard ]
    
  },
  {
    path: 'planselection',
    loadChildren: 'app/planSelection/planSelection.module#PlanSelectionModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [ AuthGuard ]
  },
 { path: '', redirectTo: 'onboarding', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}