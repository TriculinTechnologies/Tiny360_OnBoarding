// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationDetailsComponent } from './registration-details.component';

// export 
const registrationDetailsRoutes: Routes = [
  {
    path: 'registration-details',
    component: RegistrationDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(registrationDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegistrationDetailsRoutingModule { }