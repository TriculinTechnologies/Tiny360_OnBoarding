import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { ShopsModule } from './shops/shops.module';
import { StaffModule } from './staff/staff.module';
import { HolidaysModule } from './holidays/holidays.module';
import { WorkshopsModule } from './workshops/workshops.module';
import { SystemUsersModule } from './system-users/system-users.module';
import { ReportsModule } from './reports/reports.module';

import { GlobalSettingsModule } from './global-settings/global-settings.module';


import { PlanDetailsModule } from '../onBoarding/plan-details/plan-details.module';
import { NavbarModule } from '../shared/navbar/navbar.module';

import { AdminComponent} from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { OnBoardingModule } from '../onBoarding/onBoarding.module';
import { SharedModule } from '../shared/shared.module';

// import { PlanDetailsComponent }  from '../onBoarding/plan-details/plan-details.component';


// import { DashboardComponent } from './dashboard/dashboard.component';

// import { Tab1Component }  from '../admin/dashboard/tab1/tab1.component';
// import { Tab2Component }  from '../admin/dashboard/tab2/tab2.component';

@NgModule({
   imports: [
    CommonModule,
    AdminRoutingModule, 
    DashboardModule,
    ShopsModule,
    StaffModule,
    HolidaysModule,
    WorkshopsModule,
    SystemUsersModule,
    GlobalSettingsModule,
    ReportsModule,


    OnBoardingModule ,
    PlanDetailsModule,
    NavbarModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    // PlanDetailsComponent
    // DashboardComponent,
    // Tab1Component,
    // Tab2Component
  ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
// exports:[PlanDetailsModule]
})
export class AdminModule { }