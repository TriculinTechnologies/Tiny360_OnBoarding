import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http-service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-plan-details',
  providers:[HttpService],
  templateUrl: 'plan-details.component.html',
  styleUrls: ['plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
planDetails:any;
plandata:any;
tabIndex:any=0;
subplanselect:number=0;
subplanselectdetails:any;

planNo:any;
planName:any;
subplanName:any;

  constructor(private httpService:HttpService,public router: Router) { }
  ngOnInit() {
    this.httpService.getplanDetails().subscribe((res:any) => {
      this.planDetails=res.details
    this.plandata=this.planDetails[0];
    this.subplanselectdetails=this.plandata.subPlanDetails[0];
    });
  }
selectSubPlan(event:any,i:number){
   this.subplanselectdetails=this.plandata.subPlanDetails[i];
  this.subplanselect=i;
  console.log(this.subplanselectdetails);
// alert(event.target.value+","+event.target.name);
}
goPlan(i:number){
  this.subplanselect=0;
  this.tabIndex=i;
this.plandata=this.planDetails[i];
this.subplanselectdetails=this.plandata.subPlanDetails[0];
}

paidPlanSubmit(){
  this.planNo = this.plandata.planNo;
  this.planName = this.plandata.planName;
  this.subplanName = this.subplanselectdetails.subPlanName;
  sessionStorage.setItem("PaidPlanDetails",JSON.stringify({
                                                          "PlanNo"      :   this.planNo,
                                                          "PlanName"    :   this.planName,
                                                          "SubplanName" :   this.subplanName
                                                        })
                          ); 
  this.router.navigate(['onboarding/payment']);
  
}
}