import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationDetailsComponent } from './registration-details.component';
import { RegistrationDetailsRoutingModule } from './registration-details-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule,FormBuilder, Validators } from '@angular/forms';
import {OffClickDirective} from "../../shared/off-click.directive";
// import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RegistrationDetailsRoutingModule,
    ReactiveFormsModule,
    // HttpModule,
    // JsonpModule,
  ],
  exports:[RegistrationDetailsComponent],
  declarations: [RegistrationDetailsComponent,OffClickDirective]
})
export class RegistrationDetailsModule { }