import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent }     from './navbar.component';

import { ShopsComponent }    from '../../admin/shops/shops.component';

import { WorkshopsComponent }    from '../../admin/workshops/workshops.component';

// import { Tab1Component }  from './tab1/tab1.component';
// import { Tab2Component }    from './tab2/tab2.component';

// import { AuthGuard }                from '../auth-guard.service';

const navbarRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          // { path: 'tab1', component: Tab1Component },
          // { path: 'tab2', component: Tab2Component },
          // { path: '', component: Tab1Component }

         
          // { path: 'workshops', component: WorkshopsComponent },
          // { path: 'shops', component: ShopsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(navbarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavbarRoutingModule { }
