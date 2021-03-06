import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent }   from './one.component';
import { TwoComponent }      from './two.component';
import { ThreeComponent }      from './three.component';
import { FourComponent }      from './four.component';

const routes: Routes = [
  {path: '',component: OneComponent},
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}