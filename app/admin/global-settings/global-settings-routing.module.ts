// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalSettingsComponent } from './global-settings.component';

import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { StoreSettingsComponent } from './store-settings/store-settings.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { ClothSettingsComponent }    from './cloth-settings/cloth-settings.component';

const globalSettingsRoutes: Routes = [
  {
    path: '',
    component: GlobalSettingsComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'general-settings', component: GeneralSettingsComponent },
          { path: 'cloth-settings', component: ClothSettingsComponent },
          { path: 'cost-center', component: CostCenterComponent },
       { path: 'store-settings', component: StoreSettingsComponent },       
          { path: '', component: GeneralSettingsComponent }
        ]
      }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(globalSettingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GlobalSettingsRoutingModule { 

}

