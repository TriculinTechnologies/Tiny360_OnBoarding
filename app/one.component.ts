import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator, matchingPasswords ,textValidator,numberValidator,urlValidator,addressValidator} from '../app/validator';

@Component({
  moduleId: module.id,
  selector: 'pg-one',
  templateUrl: 'one.component.html'
})
export class OneComponent  { 
 textpattern :RegExp=/^[A-Z,a-z._@./#&+-.\s]+$/;
mobilepattern:RegExp= /^[0-9.\s_-]+$/;
imageData:any;
url:any;
// mobilepattern:RegExp= /^[0-9]{1,6}+-[0-9]{1,6}+$/;
  userForm:any
  constructor(public fb: FormBuilder){
    
   this.userForm =fb .group({
      businessname:['', Validators.compose([Validators.required, textValidator])],
      websitename:['', Validators.compose([ urlValidator])],
      typeOfBusiness: ['', Validators.required],
      businessAddress:['', Validators.compose([ addressValidator])]
   });
  }
  submit(){
    localStorage.setItem("onecmpvalues",JSON.stringify(this.userForm.value));
    // alert(this.userForm.value| json);
  }

   keyPress(event: any,pat:any) {
    const pattern =pat;
   let inputChar = String.fromCharCode(event.charCode);
   // console.log(inputChar, e.charCode);
   if (!pattern.test(inputChar)) {
     // invalid character, prevent input
     event.preventDefault();
   }
}

  readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    let data=event.target.files[0];
    // var data1= data.getAsBinary();
//this.imageData = event.target.files;
    reader.onload = (e:any) => {
      this.url = e.target.result;
      localStorage.setItem("theImage",reader.result);
      
    }

    reader.readAsDataURL(event.target.files[0]);
    
  }
}
}