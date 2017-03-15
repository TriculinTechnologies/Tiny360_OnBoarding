import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectionComponent } from './planselection.component';
import { PaymentModule } from './payment/payment.module';
import { SuccessModule } from './success/success.module';
import { PlanDetailsModule }  from './plan-details/plan-details.module';
import { PlanCheckingModule }  from './plan-checking/plan-checking.module';
@NgModule({
  imports: [
    CommonModule,
    PaymentModule,
    PlanDetailsModule,
    SuccessModule,
    PlanDetailsModule,
    PlanCheckingModule
  ],
  declarations: [PlanSelectionComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class PlanSelectionModule { }