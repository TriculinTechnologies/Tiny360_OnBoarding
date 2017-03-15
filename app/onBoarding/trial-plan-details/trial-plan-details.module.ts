import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrialPlanDetailsComponent} from './trial-plan-details.component';
import {TrialPlanDetailsRoutingModule} from './trial-plan-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TrialPlanDetailsRoutingModule
    // HttpModule,
    // JsonpModule,
  ],
  declarations: [TrialPlanDetailsComponent],
  exports:[TrialPlanDetailsComponent]
})
export class TrialPlanDetailsModule { }