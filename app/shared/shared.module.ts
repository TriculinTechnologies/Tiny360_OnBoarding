import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import { NavbarModule } from './navbar/navbar.module';

import { AdminModule } from '../admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    // AdminModule
  ],
  declarations: [SharedComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
exports:[SharedComponent]
})
export class SharedModule { }