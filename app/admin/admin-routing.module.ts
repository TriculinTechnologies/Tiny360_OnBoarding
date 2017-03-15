import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }     from './admin.component';

import {onBoardingRoutingModule} from '../onBoarding/onBoarding-routing.module';
import {OnBoardingModule} from '../onBoarding/onBoarding.module';

import {DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { ShopsComponent }    from './shops/shops.component';
import { WorkshopsComponent }    from './workshops/workshops.component';
import { StaffComponent }    from './staff/staff.component';
import { HolidaysComponent }    from './holidays/holidays.component';
import { SystemUsersComponent }    from './system-users/system-users.component';
import { GlobalSettingsRoutingModule} from './global-settings/global-settings-routing.module';
import { GlobalSettingsComponent} from './global-settings/global-settings.component';

import { ClothSettingsComponent }    from './global-settings/cloth-settings/cloth-settings.component';
import { StoreSettingsComponent }    from './global-settings/store-settings/store-settings.component';
import { GeneralSettingsComponent }    from './global-settings/general-settings/general-settings.component';
import { CostCenterComponent }    from './global-settings/cost-center/cost-center.component';


import { ReportsComponent }    from './reports/reports.component';

// import { AuthGuard } from '../auth-guard.service';
const routename=JSON.parse(sessionStorage.getItem("admindetails")).adminPartyId;
const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      // {
        // path: '',
        // // canActivateChild: [AuthGuard],
        // children: [
          {
            path: '',
            loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule', 
          },
          {
            path: 'dashboard',
            loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule', 
          },
           {
            path: 'global-settings',
            loadChildren: 'app/admin/global-settings/global-settings.module#GlobalSettingsModule',
          },
          {
            path: 'global-settings/store-settings',
            component: StoreSettingsComponent,
          },
          {
            path: 'global-settings/cloth-settings',
            component: ClothSettingsComponent,
          },
          {
            path: 'global-settings/general-settings',
            component: GeneralSettingsComponent,
          },
          {
            path: 'global-settings/cost-center',
            component: CostCenterComponent,
          },
          {
            path: 'shops',
            component: ShopsComponent,
          },
          {
            path: 'staff',
            component: StaffComponent,
          },
           {
            path: 'holidays',
            component: HolidaysComponent,
          },
           {
            path: 'workshops',
            component: WorkshopsComponent,
          },
             {
            path: 'system-users',
            component: SystemUsersComponent,
          },
           {
            path: 'reports',
            component: ReportsComponent,
          },
        ]
    //   }
     
    // ]
  },
   { path: 'admin'+routename, redirectTo: '/admin/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],  
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
