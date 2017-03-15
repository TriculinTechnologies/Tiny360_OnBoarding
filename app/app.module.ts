import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import {  HttpModule  } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { OnBoardingModule } from './onBoarding/onBoarding.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent }   from './not-found.component';
import {  ServiceErrorPageComponent } from './shared/serviceErrorPage/service-error-page.component';
// import { NavbarModule } from './shared/navbar/navbar.module';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // HttpModule,JsonpModule,
    AppRoutingModule,AdminModule,OnBoardingModule,SharedModule
    ],
  declarations: [ AppComponent,PageNotFoundComponent,ServiceErrorPageComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
