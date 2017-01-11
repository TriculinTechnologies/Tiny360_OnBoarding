import { NgModule }      from '@angular/core';
import { FormsModule,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpModule  } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }  from './app.component';
import { OneComponent }   from './one.component';
import { TwoComponent }      from './two.component';
import { ThreeComponent }   from './three.component';
import { FourComponent }   from './four.component';
import { PlandetailsComponent }      from './plandetails.component';
//import {ShowHideInput} from './show-hide-input';
import { emailValidator, matchingPasswords ,textValidator,numberValidator} from '../app/validator';
import {OffClickDirective} from "./off-click.directive";
//import { AuthenticationService, UserService } from './services/index';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpModule ],
  declarations: [ AppComponent,OneComponent,TwoComponent,ThreeComponent,FourComponent,OffClickDirective,PlandetailsComponent],
 
   providers: [ {
                provide: APP_BASE_HREF,
                useValue: '/'
  }],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
