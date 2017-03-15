import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportsComponent],
  exports:[ReportsComponent]
})
export class ReportsModule { }