import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiSelectModule } from '../../shared/component/multiselect/multiselect';

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,MultiSelectModule
  ],
  declarations: [OrderComponent,]
})
export class OrderModule { }