// import { Route } from '@angular/router'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HolidaysComponent } from './holidays.component';

// export 
const holidaysRoutes: Routes = [
  {
    path: 'holidays',
    component: HolidaysComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(holidaysRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HolidaysRoutingModule { 

}