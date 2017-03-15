import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details.component';
import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { FormsModule,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
// import { HttpModule, JsonpModule } from '@angular/http';

// import { LoginModule }  from '../login/login.module';
@NgModule({
  imports: [
    CommonModule,
    PersonalDetailsRoutingModule,
    FormsModule,
    // FormBuilder,
    ReactiveFormsModule,
    // HttpModule,
    // JsonpModule,
    // LoginModule
  ],
  declarations: [PersonalDetailsComponent],
  exports: [PersonalDetailsComponent]
})
export class PersonalDetailsModule { }