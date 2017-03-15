import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent }       from './success.component';


const successRoutes: Routes = [
  { 
    path: 'payment', 
    component: SuccessComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(successRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class SuccessRoutingModule {}