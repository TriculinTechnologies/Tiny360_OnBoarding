import { Directive,Component ,OnInit,ElementRef,HostListener  } from '@angular/core';
import {FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { emailValidator, matchingPasswords ,textValidator,numberValidator,addressValidator,urlValidator} from '../../shared/validator';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http-service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {OffClickDirective} from "../../shared/off-click.directive";
import * as CryptoJS from 'crypto-js';

@Component({
  moduleId: module.id,
  selector: 'app-registration-details',
  providers: [HttpService],
  templateUrl: 'registration-details.component.html',
  styleUrls: ['registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  userForm: any;
  firstName:any;
  lastName:any;
  emailId: string;
  mobileNo: string;
  password:any;
  businessName: string;
  typeOfBusiness: string;
  website: string;
  businessAddress: string;
  data:any=[];
  registeredUsers:Observable<any>;
  textpattern :RegExp=/^[A-Z,a-z\s]+$/;
  mobilepattern:RegExp= /^[0-9.\s_-]+$/;
  dropdowmshowandhide:boolean=true;
  dropdowmshowandhide1:boolean=false;
  private processing:boolean = false;
  encryptedAuth:any;
  Defaultimage:any=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+ED+mh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NUQyMDg5MjQ5M0JGREIxMTkxNEE4NTkwRDMxNTA4QzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QThFNTg3QjUxNkFBMTFFNjhBNkNBNzMzMzNBRTg0MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QThFNTg3QjQxNkFBMTFFNjhBNkNBNzMzMzNBRTg0MDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjAxNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZDRhNDhkMy04OTU3LTUxNDEtYjhkMi0xNjNhNzliMzIyNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGQ0YTQ4ZDMtODk1Ny01MTQxLWI4ZDItMTYz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`
  spanEmailId: boolean = false;
  public emailIdStatus = false;
  
  ngOnInit(){

    this.userForm.controls.emailId.valueChanges.debounceTime(5000).subscribe((value:any) => {
      
      this.emailValidator(this.userForm.controls.emailId)
    });

    // if((sessionStorage.getItem('sessionId') === null) || (sessionStorage.getItem('sessionId') === undefined)){
    //       this.router.navigate(['/onboarding']);
    // }
    let length=this.ef.nativeElement.children[0].length;

    for(let j=0;j<length;j++){
       if (j!=4) {
          this.ef.nativeElement.children[0][j].disabled=true;
        }
    }
    this.data.push(JSON.parse(localStorage.getItem('onecmpvalues')));
    this.data.push(JSON.parse(localStorage.getItem('twocmpvalues')));
    if (localStorage.getItem('onecmpvalues') && localStorage.getItem('twocmpvalues')) {       
          this.firstName = this.data[1].firstname;
          this.lastName = this.data[1].lastname;
          this.emailId = this.data[1].email;
          this.mobileNo = this.data[1].mobileno;
          this.password = this.data[1].password;
          this.businessName = this.data[0].businessname;
          this.typeOfBusiness = this.data[0].typeOfBusiness;
          this.website = this.data[0].websitename;
          this.businessAddress = this.data[0].businessAddress;
          this.imageData=localStorage.getItem('theImage');
    }
 }
  constructor(public fb: FormBuilder,public httpService: HttpService,public ef:ElementRef,public router: Router) {
    this.clickedOutside = this.clickedOutside.bind(this);
    this.userForm = fb.group({
      firstName: ['', Validators.compose([Validators.required, textValidator])],
      lastName: ['', Validators.compose([Validators.required, textValidator])],
      emailId: ['', Validators.compose([Validators.required, emailValidator])],
      mobileNo: ['', Validators.compose([Validators.required, numberValidator])],
      businessName: ['', Validators.compose([Validators.required, textValidator])],
      typeOfBusiness:['', Validators.compose([Validators.required, textValidator])],
      website: ['', Validators.compose([urlValidator])],
      businessAddress:['', Validators.compose([ addressValidator])]    
    })
  }
 
emailValidator(control:FormControl) {

        var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (control.value && !email.test(control.value)) {
   return { invalidemail: true }
 }
   else{
     if (this.userForm.controls.emailId.valid) {
       this.processing = true;
       let emailUrl: any = "http://localhost:8081/CustomerValid?Emailid=" + this.userForm.controls.emailId.value;
      //  let emailUrl: any = "http://TRISERVER:8081/CustomerValid?Emailid=" + this.userForm.controls.emailId.value;
      this.spanEmailId = false;
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
         this.router.navigate(['error-page']);
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


dropdownshowandhide(){
  this.dropdowmshowandhide=!this.dropdowmshowandhide;
}
    edit(i:number){
      let length=this.ef.nativeElement.children[0].length;
    
     for(let j=0;j<length;j++)
     {
         if (j!=4) {
       this.ef.nativeElement.children[0][j].disabled=true;
         }
     }
      this.ef.nativeElement.children[0][i].disabled=false;
      this.ef.nativeElement.children[0][i].autofocus=true;
     }

     clickedOutside(){
        console.log("clicked outside");
        this.dropdowmshowandhide = true;
         this.ef.nativeElement.children[0][6].autofocus=false;
  this.ef.nativeElement.children[0][6].disabled=true;
       
        //$event.stopPropagation();
    }
      myfun(){
  this.ef.nativeElement.children[0][6].autofocus=false;
  this.ef.nativeElement.children[0][6].disabled=false;
      }
 keyPress(event: any,pat:any) {
    const pattern =pat;
   let inputChar = String.fromCharCode(event.charCode);
   // console.log(inputChar, e.charCode);

   // ergdg
   if (!pattern.test(inputChar)) {
     // invalid character, prevent input
     event.preventDefault();
   }
} 

  registeredUsersDetails(): any {
     
    this.httpService
        .registeredUsersDetails()
        .subscribe((registeredUsers:any) => this.registeredUsers = registeredUsers);
       
  }

  submit(
          firstName:any,
          lastName:any,
          emailId:any,
          mobileNo:any,
          password:any,
          businessName:any,
          typeOfBusiness:any,
          website:any,
          businessAddress:any,
          imageData:any
        ){
    this.processing = true;
    console.log("start processing");
    localStorage.setItem('threeComponent',JSON.stringify(this.userForm.value));
    this.data= (localStorage.getItem('threeComponent'));
    console.log(this.data);
    localStorage.clear();
    // localStorage.removeItem('onecmpvalues');
    // localStorage.removeItem('theImage');
    // localStorage.removeItem('threeComponent');
    // localStorage.removeItem('twocmpvalues');

    this.httpService.createUser(firstName,lastName,emailId,mobileNo,password,
    businessName,
    typeOfBusiness,
    website === null || undefined ? website : " ",
    businessAddress === null || undefined ? businessAddress:" " ,
    imageData === null || undefined ? this.Defaultimage : imageData)
      .subscribe((value: any) => {
        let regStatus = JSON.parse(value._body);
        if(regStatus.RegStatus == "true")
        {
          this.router.navigate(['/onboarding']);
        }else{
          this.router.navigate(['/onboarding/business-details']);
        }
        //console.log("Current setting value is", value);
        //encryption start
        // var key = CryptoJS.enc.Utf8.parse('7061737323313233');
        // var iv = CryptoJS.enc.Utf8.parse('7061737323313233');
        // this.encryptedAuth = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(value._body)), key,
        //     {
        //         keySize: 128 / 8,
        //         iv: iv,
        //         mode: CryptoJS.mode.CBC,
        //         padding: CryptoJS.pad.Pkcs7
        //     });
        //   sessionStorage.setItem("encryptedAuth",this.encryptedAuth);

        //encryption end

        this.processing = false;
    }, err => {
        console.log("Error occurred while saving setting",err);
        this.processing = false;
        this.router.navigate(['error-page']);
      });
     
  } 
  
//   getSuccess(){
//     this.router.navigate(['/onboarding/login']);
// }
  imageData:any;
  url:any;
readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    let data=event.target.files[0];
    // var data1= data.getAsBinary();
//this.imageData = event.target.files;
    reader.onload = (e:any) => {
      this.imageData = e.target.result;
      localStorage.setItem("theImage",reader.result);
      // localStorage.setItem("theImage",JSON.stringify(reader.result));
      //localStorage.theImage = reader.result;
    }

    reader.readAsDataURL(event.target.files[0]);
    
  }
}

}