import { Component } from '@angular/core'; 
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { emailValidator, matchingPasswords ,textValidator,numberValidator,urlValidator,addressValidator} from '../../shared/validator';
import { HttpService } from '../../shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'app-payment',
    providers:[HttpService],
    templateUrl:'payment.component.html',
    styleUrls:['payment.component.css']
})

export class PaymentComponent {
textpattern :RegExp=/^[A-Z,a-z._@./#&+-.\s]+$/;
 numberpattern:RegExp= /^[0-9.\s_-]+$/;    
name:string="credit";
userForm:any;
userform:any;
UserForm:any;

 constructor(public fb: FormBuilder,private httpService:HttpService,public router: Router){
     this.userForm =fb.group({
      cardname:['', Validators.compose([Validators.required, textValidator])],
      cardnumber:['',Validators.compose([Validators.required, numberValidator])],
      cvv:['',Validators.compose([Validators.required, numberValidator])],
       month:['',Validators.compose([Validators.required])],
        year:['',Validators.compose([Validators.required])]
     });

      this.userform =fb.group({
      cardName:['', Validators.compose([Validators.required, textValidator])],
      cardNo:['',Validators.compose([Validators.required, numberValidator])],
      CVV:['',Validators.compose([Validators.required, numberValidator])],
        Month:['',Validators.compose([Validators.required])],
        Year:['',Validators.compose([Validators.required])]
     });

     this.UserForm=fb.group({
 bank:['',Validators.compose([Validators.required])]
     })
 }
selectpayment($event:any){
this.name=$event.target.value;
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

processTransaction(){
    let paidPlanDetails = JSON.parse(sessionStorage.getItem('PaidPlanDetails'))
//sessionStorage.getItem("PaidPlanDetails");
 this.httpService.createUserSubscrPaid(   paidPlanDetails.PlanNo,
                                          paidPlanDetails.PlanName,
                                          paidPlanDetails.SubplanName
    ).subscribe((value: any) => {
      let createUserSubscrStatus = JSON.parse(value._body);
      console.log(createUserSubscrStatus);
      if(createUserSubscrStatus == true)
      this.router.navigate(['onboarding/success']);
    }, err => {
        this.router.navigate(['error-page']);
    });

}

 }

