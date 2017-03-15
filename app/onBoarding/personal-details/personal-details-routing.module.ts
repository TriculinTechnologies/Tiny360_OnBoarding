// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalDetailsComponent } from './personal-details.component';

// export 
const personalDetailsRoutes: Routes = [
  {
    path: 'personal-details',
    component: PersonalDetailsComponent
  },
// { path: '', redirectTo: '/onboarding', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(personalDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalDetailsRoutingModule { }