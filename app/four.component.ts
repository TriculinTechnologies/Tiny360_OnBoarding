import { Component,ViewChild,OnInit,ViewEncapsulation,ElementRef } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { emailValidator} from './validator';
import {  HttpService } from './http-service';
import { Router } from '@angular/router';


@Component({
 moduleId: module.id,
 selector: 'pg-four',
 templateUrl: 'four.component.html',
 providers:[HttpService],
 styleUrls:['own_styles1.css'],
 encapsulation:ViewEncapsulation.Emulated
})
export class FourComponent implements OnInit {
    
    loginEmail: string;
    loginPwd:any;
    data:any=[];
    userForm:any;
    loginStatus:boolean = false;
    spanEmailPwd:boolean = false;
    show:boolean= false;
    language:{name:string,value:string}[];
    ngOnInit(){
      this.language=[
      {"name":"Select Your own Language","value":""},
      {"name":"English","value":"English"},
      {"name":"French","value":"French"},
      {"name":"Chinese","value":"Chinese"},
      {"name":"Czech","value":"Czech"},
      {"name":"Trurkish","value":"Trurkish"}
   ]
        this.data.push(JSON.parse(sessionStorage.getItem('loginCredentials')));
        if (sessionStorage.getItem('loginCredentials') ) { 
            this.loginEmail = this.data[0].EmailId;
            this.loginPwd = this.data[0].Password;
        }
    }
    constructor(public fb: FormBuilder,public httpService:HttpService, public ef: ElementRef,public router: Router){
        this.userForm =fb .group({
            loginEmail: ['', Validators.compose([Validators.required, emailValidator])],
            loginPwd: ['', Validators.required]
        })
   }
  toggleShow() {
    this.show = !this.show;
   // console.log(this.input); //undefined
   if(this.show){
     this.ef.nativeElement.children[2].children[0].children[0].children[0][1].type="text";
    }
    else {
      this.ef.nativeElement.children[2].children[0].children[0].children[0][1].type = "password";
    }
  
  }
 
   login(loginEmail:any,loginPwd:any){
       let loginUrl:any = "http://192.168.2.131:8081/CustomerAuth?Emailid="+loginEmail+"&Password="+loginPwd;
       this.httpService.loginValidation(loginUrl)
       .subscribe((value: any) => {
        if(value._body == "false"){
        console.log("Please Enter Valid Email OR Password", value);
        this.loginStatus = false;
      }else{
        console.log("Login Sucess", value);
        this.loginStatus = true;
        this.router.navigate(['plandetails']);
      }
    }, err => {
        console.log("Server Busy",err);
    }, () => {
      if(this.loginStatus == false){
        console.log("Enter Valid Email or Pwd");
        this.spanEmailPwd = true;
      }else{
        console.log("Valid Email & Pwd");
        this.spanEmailPwd = false;
        
      }
       });
    }
}
