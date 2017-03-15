import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarModule } from './navbar/navbar.module';
import { AdminModule } from '../admin/admin.module';
import {PaginationComponent, GlobalSearchComponent, HttpService, ResourceService, FiltersService, GlobalSearchPipe,
  SearchPipe, PaginationPipe}from'./index';
@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    // AdminModule
  ],
  declarations: [SharedComponent,PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,SearchPipe, PaginationPipe,
],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
exports:[SharedComponent,PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,
  SearchPipe, PaginationPipe]
})
export class SharedModule { }