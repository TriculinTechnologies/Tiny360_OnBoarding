import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays.component';
import { HolidaysRoutingModule } from './holidays-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HolidaysRoutingModule
  ],
  declarations: [HolidaysComponent],
  exports:[HolidaysComponent]
})
export class HolidaysModule { }