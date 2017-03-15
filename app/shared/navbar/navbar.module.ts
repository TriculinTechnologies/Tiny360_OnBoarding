import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarRoutingModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [NavbarComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
exports:[NavbarComponent]
})
export class NavbarModule { }