import { Component,ElementRef, ViewChild,  HostListener } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailValidator, matchingPasswords, textValidator, numberValidator } from '../../shared/validator';
import { HttpService } from '../../shared/services/http-service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

@Component({
  moduleId: module.id,
  selector: 'app-personal-details',
  providers: [HttpService],
  templateUrl: 'personal-details.component.html',
  styleUrls: ['personal-details.component.css']
})
export class PersonalDetailsComponent {
  
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  mobileno: string = "";
  password: string = "";
  confirmPassword: string = "";
  textpattern: RegExp = /^[A-Z,a-z]+$/;
  mobilepattern: RegExp = /^[0-9.\s_-]+$/;
  show = false;
  spanEmailId: boolean = false;
  public emailIdStatus = false;
  private processing:boolean = false;
  userForm: any;
  
  ngOnInit() {
       this.userForm.controls.email.valueChanges.debounceTime(5000).subscribe((value:any) => {
      // do something with value here
      //alert("email changes");
      this.emailValidator(this.userForm.controls.email)
    });
    // if((sessionStorage.getItem('sessionId') === null) || (sessionStorage.getItem('sessionId') === undefined)){
    //       this.router.navigate(['/onboarding']);
    // }
  }
  constructor(public fb: FormBuilder, public ef: ElementRef, public httpService: HttpService,public router: Router) {
    this.userForm = fb.group(
      {
        firstname: ['', Validators.compose([Validators.required, textValidator])],
        lastname: ['', Validators.compose([Validators.required, textValidator])],
        email: ['', Validators.compose([Validators.required, emailValidator])],
        mobileno: ['', Validators.compose([Validators.required, numberValidator, Validators.maxLength(10), Validators.minLength(10)])],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validator: matchingPasswords('password', 'confirmPassword') 
      }
    )
  }
  submit() {
    localStorage.setItem("twocmpvalues", JSON.stringify(this.userForm.value));
  }
  // @HostListener('focusout', ['$event.target'])
  // onFocusout(target: any) {
  //   console.log("Focus out called");
  //   target.type = 'text';
  // }
emailValidator(control:FormControl) {

        var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (control.value && !email.test(control.value)) {
   return { invalidemail: true }
 }
   else{
     if (this.userForm.controls.email.valid) {
       this.processing = true;
      
    let emailUrl: any = "http://localhost:8081/CustomerValid?Emailid=" + this.userForm.controls.email.value;
      // let emailUrl: any = "http://DESKTOP-O60VD5L:8081/CustomerValid?Emailid=" + this.userForm.controls.email.value;
    // let emailUrl: any = "http://desktop-fkqp4pv:8081/CustomerValid?Emailid=" + this.userForm.controls.email.value;
     //http://desktop-fkqp4pv:8081/CustomerValid?Emailid=mail77988.triculintech.com
     this.spanEmailId = false;
     //console.log("Focus out called");
     this.httpService.emailValidCheck(emailUrl)
       .subscribe((value: any) => {
         let status=JSON.parse(value._body)
         if (status.Status == "false") {
           console.log("Valid Email", value);
           this.emailIdStatus = false;
           this.processing = false;
         } else {
           console.log("The Email Already Exists", value);
           this.emailIdStatus = true;
           this.processing = false;
         }
       }, err => {
         console.log("Server Busy", err);
         this.router.navigate(['error']);
       }, () => {
         if (this.emailIdStatus == false) {
           console.log("Valid Email");
           this.spanEmailId = false;
         } else {
           console.log("The Email Already Exists");
           this.spanEmailId = true;
         }
       });
   }
 }
     
   }
    onPaste(e:any){
  let content=e.clipboardData.getData('text/plain');
  //this.confirmPassword = "";
    setTimeout(() => {
    this.confirmPassword = "";
  }, 0);
  }

  keyPress(event: any, pat: any) {
    const pattern = pat;
    let inputChar = String.fromCharCode(event.charCode);
    // console.log(inputChar, e.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}