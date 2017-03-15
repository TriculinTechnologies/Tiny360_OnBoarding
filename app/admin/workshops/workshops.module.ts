import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopsComponent } from './workshops.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[WorkshopsComponent],
  declarations: [WorkshopsComponent]
})
export class WorkshopsModule { }