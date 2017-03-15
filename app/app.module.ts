import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import {  HttpModule  } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { OnBoardingModule } from './onBoarding/onBoarding.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent }   from './not-found.component';
import { PlanSelectionModule } from './planSelection/planSelection.module';

// import {
//   CanActivate, Router,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   CanActivateChild,
//   NavigationExtras,
//   CanLoad, Route
// } from '@angular/router';
// import { AuthService }      from './auth.service';
//import { NgIdleModule } from '@ng-idle/core'; 
//import { MomentModule } from 'angular2-moment';
// import { NavbarModule } from './shared/navbar/navbar.module';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
    // HttpModule,JsonpModule,
    AppRoutingModule,AdminModule,OnBoardingModule,SharedModule,PlanSelectionModule
    ],
  declarations: [ AppComponent,PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
