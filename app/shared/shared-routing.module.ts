import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';


// import { AuthGuard }                from '../auth-guard.service';

const sharedRoutes: Routes = [
                         
  {
    path: '',
    component: NavbarComponent,
  },     
  {
    path: 'navbar',
    component: NavbarComponent,
  },
{ path: '', redirectTo: '/navbar', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class onBoardingRoutingModule { }
