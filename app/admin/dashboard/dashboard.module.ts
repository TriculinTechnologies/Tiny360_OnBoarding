import { NgModule,CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { DashboardComponent }           from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    Tab1Component,
    Tab2Component
  ],
  exports:[ 
    DashboardComponent,
    Tab1Component,
    Tab2Component
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {}

