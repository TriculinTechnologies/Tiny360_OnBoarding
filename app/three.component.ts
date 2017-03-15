import { Directive,Component ,OnInit,ElementRef,HostListener  } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator, matchingPasswords ,textValidator,numberValidator,addressValidator,urlValidator} from '../app/validator';
import { Router } from '@angular/router';
import {  HttpService } from './http-service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {OffClickDirective} from "./off-click.directive";
//import {Cookie} from 'angular2-cookie/core';


@Component({
  moduleId: module.id,
  selector: 'pg-three',
  providers:[HttpService],
  templateUrl: 'three.component.html'
})
export class ThreeComponent implements OnInit {
  
  //  @Input() text:any;
  // @Output() edit =new EventEmitter<string>();
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
//   @HostListener('mouseover', ['$event.target'])
//   onfocusout(btn:any):void {
//       let length=this.ef.nativeElement.children[0].length;
//  for(let j=0;j<length;j++)
//      {
//        this.ef.nativeElement.children[0][j].disabled=true;
//      }
//   }

  ngOnInit(){
    let length=this.ef.nativeElement.children[0].length;

 for(let j=0;j<length;j++)
     {
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
  //     myfun(){
  // this.ef.nativeElement.children[0][6].autofocus=false;
  // this.ef.nativeElement.children[0][6].disabled=false;
  //     }
 keyPress(event: any,pat:any) {
    const pattern =pat;
   let inputChar = String.fromCharCode(event.charCode);
   // console.log(inputChar, e.charCode);
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
    this.httpService.createUser(firstName,lastName,emailId,mobileNo,password,businessName,typeOfBusiness,website,businessAddress,imageData)
      .subscribe((value: any) => {
        console.log("Current setting value is", value);
        sessionStorage.setItem("loginCredentials",value._body);
        this.router.navigate(['four']);
    }, err => {
        console.log("Error occurred while saving setting",err);
          this.processing = false;
    //      getCookie(key: string){
    //     return this._cookie.get(key);
    // }
       // this.router.navigate(['one']);
    })
      // .subscribe((registeredUsers:any) => this.registeredUsers=this.httpService.registeredUsersDetails());s
  }
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



