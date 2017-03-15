// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessDetailsComponent } from './business-details.component';

// export 
const businessDetailsRoutes: Routes = [
  {
    path: 'business-details',
    component: BusinessDetailsComponent
  },
  // { path: '', redirectTo: '/business-details', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(businessDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BusinessDetailsRoutingModule { }