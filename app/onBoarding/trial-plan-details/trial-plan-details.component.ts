import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http-service';
import { Router } from '@angular/router';

@Component({
  
  moduleId:module.id,
  selector: 'app-trial-plan-details',
  providers: [HttpService],
  templateUrl: 'trial-plan-details.component.html',
  styleUrls: ['trial-plan-details.component.css']
})
export class TrialPlanDetailsComponent implements OnInit {

  dateValidFrom:Date;
  dateValidTill:Date;
  numberOfDaysToAdd:number = 30;
  someFormattedDate:any;
 
  constructor(public httpService: HttpService,public router: Router) {
    this.dateValidFrom = new Date();
    this.dateValidTill = new Date();
    this.dateValidTill.setDate(this.dateValidFrom.getDate() + this.numberOfDaysToAdd);
    let dd = this.dateValidTill.getDate();
    let mm = this.dateValidTill.getMonth() + 1;
    let y  = this.dateValidTill.getFullYear();
    this.someFormattedDate = dd + '/'+ mm + '/'+ y;
   }

  ngOnInit() {
  }

  trialPlanSubmit(){
    this.httpService.createUserSubscrTrial()
    .subscribe((value: any) => {
      let createUserSubscrStatus = JSON.parse(value._body);
      console.log(createUserSubscrStatus);
      this.router.navigate(['admin']);
    }, err => {
      this.router.navigate(['error-page']);
    });
  }

}