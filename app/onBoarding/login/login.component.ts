import { Component,ViewChild,OnInit,ViewEncapsulation ,ElementRef} from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AuthGuard } from '../../auth-guard.service';
import { emailValidator} from '../../shared/validator';
import { HttpService } from '../../shared/services/http-service';
// import{Observable} "rxjs";


@Component({
  moduleId: module.id,
  selector: 'app-login',
  providers: [
    AuthGuard,
    AuthService,
    HttpService
  ],
  templateUrl: 'login.component.html',  
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit  {

    message: string;
    loginEmail: string;
    loginPwd:string="";
    data:any=[];
    userForm:any;
    loginStatus:boolean = false;
    spanEmailPwd:boolean = false;
    show:boolean = false;
    language:{name:string,value:string}[];
    processing:boolean = false;
    error ='';
    decryptData:any;
    decryptedAuth:any;
    decryptedData:any;
    sessionId:number;
    ngOnInit(){
   
        this.language=[
            {"name":"Select Your own Language","value":""},
            {"name":"English","value":"English"},
            {"name":"French","value":"French"},
            {"name":"Chinese","value":"Chinese"},
            {"name":"Czech","value":"Czech"},
            {"name":"Trurkish","value":"Trurkish"}
        ]
        
      sessionStorage.clear();
        }

  constructor(public authService: AuthService,public fb: FormBuilder,public httpService:HttpService ,public ef: ElementRef, public router: Router) {
     this.userForm =fb .group({
            loginEmail: ['', Validators.compose([Validators.required, emailValidator])],
            loginPwd: ['', Validators.required]
        })
 
     
  }  

 
    getRandomInt(min:any, max:any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

sessionClear(){
  sessionStorage.removeItem('sessionId');
  sessionStorage.removeItem('encryptedAuth');
}
toggleShow() {
    this.show = !this.show;
        if (this.show) {
     this.ef.nativeElement.children[2].children[0].children[0].children[0][1].type="text";
    }
    else {
      this.ef.nativeElement.children[2].children[0].children[0].children[0][1].type = "password";
    }
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(loginEmail:any,loginPwd:any){
       this.processing = true;
    
       let loginUrl:any = "http://localhost:8081/CustomerAuth?Emailid="+loginEmail+"&Password="+loginPwd;
       this.httpService.loginValidation(loginUrl)
       .subscribe((value: any) => {
           let bodydata=JSON.parse(value._body);
           
           if(bodydata.AuthStatus == "true"){
                    if((sessionStorage.getItem('sessionId') === null) || (sessionStorage.getItem('sessionId') === undefined)){
                          this.sessionId = this.getRandomInt(1, 10000000);
                          sessionStorage.setItem('sessionId',JSON.stringify(this.sessionId));
                      }
                        this.authService.isLoggedIn = true;
                  // logic of plan checking starts
                  let planCheckUrl:any = "http://localhost:8082/PLAN_DESIGN/CHECKSUBSCR?partyId="+bodydata.CustPartyId;
                  this.httpService.planChecking(planCheckUrl)
                  .subscribe( (planSelectStatus:any)=> {
                      let plandata=JSON.parse(planSelectStatus._body);
                      if(plandata.planSelectionStatus == "true"){
                        console.log("Respective dashboard will be displayed");
                        this.router.navigate(['/onboarding/admin']);
                        sessionStorage.setItem("admindetails",JSON.stringify({
                                                                    "adminPartyId":bodydata.CustPartyId,
                                                                    "adminEmailId":bodydata.EmaiId,
                                                                    "adminUserRole":bodydata.UserRole
                                                                  })
                                    ); 
                      }
                      else{
                        this.router.navigate(['/planselection/plan-checking']);
                        sessionStorage.setItem("admindetails",JSON.stringify({
                                                                    "adminPartyId":bodydata.CustPartyId,
                                                                    "adminEmailId":bodydata.EmaiId,
                                                                    "adminUserRole":bodydata.UserRole
                                                                  })
                                    ); 
                      }
                  })
             
         
           }
           else {
             this.loginStatus=false;
                        this.processing=false;
             this.router.navigate(['/onboarding/login']); 

           }
           console.log(bodydata);
    
      this.processing = false;
    }, err => {
        console.log("Server Busy",err);
        this.processing = false;
    }, () => {
      if(this.loginStatus == false){
        console.log("Enter Valid Email or Pwd");
        this.spanEmailPwd = true;
      }else{
        console.log("Valid Email & Pwd");
        this.spanEmailPwd = false;
      }
       });
      //sessionStorage.setItem("email&pwd",JSON.stringify({"email":loginEmail,"pwd":loginPwd})); 
      this.processing = false;
    }

 
    
  logout() {
    this.authService.logout();
    this.setMessage();
  }

  
}
