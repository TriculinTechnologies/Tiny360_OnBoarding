import { Component } from '@angular/core'; 
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { emailValidator, matchingPasswords ,textValidator,numberValidator,urlValidator,addressValidator} from '../../shared/validator';
@Component({
    moduleId:module.id,
    selector:'app-payment',
    templateUrl:'payment.component.html',
    styleUrls:['payment.component.css']
})

export class PaymentComponent {
textpattern :RegExp=/^[A-Z,a-z._@./#&+-.\s]+$/;
 numberpattern:RegExp= /^[0-9.\s_-]+$/;    
name:string="credit";
CreditForm:any;
DebitForm:any;
BankForm:any;
 constructor(public fb: FormBuilder){
     this.CreditForm =fb.group({
      cardname:['', Validators.compose([Validators.required, textValidator])],
      cardnumber:['',Validators.compose([Validators.required, numberValidator])],
      cvv:['',Validators.compose([Validators.required, numberValidator])],
       month:['',Validators.compose([Validators.required])],
        year:['',Validators.compose([Validators.required])]
     });

      this.DebitForm =fb.group({
      cardName:['', Validators.compose([Validators.required,textValidator])],
      cardNo:['',Validators.compose([Validators.required, numberValidator])],
      CVV:['',Validators.compose([Validators.required,numberValidator])],
        Month:['',Validators.compose([Validators.required])],
        Year:['',Validators.compose([Validators.required])]
     });

     this.BankForm=fb.group({
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

  submit(){
  console.log(JSON.stringify(this.CreditForm.value));
   console.log(JSON.stringify(this.DebitForm.value));
    console.log(JSON.stringify(this.BankForm.value));
    
  }
 }

