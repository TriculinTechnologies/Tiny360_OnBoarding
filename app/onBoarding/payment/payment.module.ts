import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentComponent} from './payment.component';
import {PaymentRoutingModule} from './payment-routing.module';
import { FormsModule,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
     ReactiveFormsModule
    // HttpModule,
    // JsonpModule,
  ],
  declarations: [PaymentComponent],
  exports:[PaymentComponent]
})
export class PaymentModule { }
