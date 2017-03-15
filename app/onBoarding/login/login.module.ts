import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
// import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    // HttpModule,
    // JsonpModule,
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class LoginModule { }