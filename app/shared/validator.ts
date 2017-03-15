import { FormGroup, FormArray, FormBuilder, Validators,FormControl } from '@angular/forms';
import {  HttpService } from './services/http-service';
// SINGLE FIELD VALIDATORS
export function emailValidator(control: FormControl): {[key: string]: any} {
  var httpService:HttpService;
  var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
  if (control.value && !email.test(control.value)) {
    return { invalidemail: true };
  }
}

export function textValidator(control:FormControl): {[key:string]: any} {
  var textVal=/^[A-Z,a-z._@./#&+-.\s]+$/;
  if (control.value && !textVal.test(control.value)) {
  return { invalidtext: true };
  }
}

export function numberValidator(control:FormControl): {[key:string]: any} {
  var numberVal=/^[0-9]*$/;
  if (control.value && !numberVal.test(control.value)) {
  return { invalidnumber: true };
  }
}
export function urlValidator(control:FormControl): {[key:string]: any} {
  var urlVal=/^(http(s?):\/\/)?(www\.)+[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,4})+(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$/;
  if (control.value && !urlVal.test(control.value)) {
  return { invalidurl: true };
  }
}
export function addressValidator(control:FormControl): {[key:string]: any} {
  var addressVal=/^[a-zA-Z0-9.():,'/&#._;@-\s]*$/;
  if (control.value && !addressVal.test(control.value)) {
  return { invalidaddress: true };
  }
}
//CONTROL GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];  
    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}

  //multi select validations
export function multiselectValidator(control:FormControl): {[key:string]: any} {
 if(control.value){
 if (control.value.length>0 &&control.value.length>3  ) {
 return { invalidmultiselectoptions: true };
 }
}
} 






  