import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ShopsComponent],
  declarations: [ShopsComponent]
})
export class ShopsModule { }