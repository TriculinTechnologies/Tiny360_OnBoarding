import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details.component';
import { BusinessDetailsRoutingModule } from './business-details-routing.module';
import { FormsModule,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BusinessDetailsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BusinessDetailsComponent],
  exports:[BusinessDetailsComponent]
})
export class BusinessDetailsModule { }