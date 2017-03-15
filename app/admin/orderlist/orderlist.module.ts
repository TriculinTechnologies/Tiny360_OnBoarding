import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OrderlistComponent } from './orderlist.component';
import {SharedModule} from '../../shared/shared.module';
import { DialogModule} from '../../shared/component/dialog/dialog';
@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,SharedModule,DialogModule
  ],
  declarations: [OrderlistComponent]
})
export class OrderlistModule { }