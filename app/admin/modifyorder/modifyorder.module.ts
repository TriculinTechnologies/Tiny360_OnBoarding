import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiSelectModule } from '../../shared/component/multiselect/multiselect';
import { ModifyorderComponent } from './modifyorder.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,MultiSelectModule
  ],
  declarations: [ModifyorderComponent]
})
export class ModifyorderModule { }