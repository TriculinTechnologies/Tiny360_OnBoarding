import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }     from './dashboard.component';

import { Tab1Component }  from './tab1/tab1.component';
import { Tab2Component }    from './tab2/tab2.component';

// import { AuthGuard }                from '../auth-guard.service';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'tab1', component: Tab1Component },
          { path: 'tab2', component: Tab2Component },
          { path: '', component: Tab1Component }
        ]
      }
    ]
  },
  //  { path: '', redirectTo: '/admin', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
