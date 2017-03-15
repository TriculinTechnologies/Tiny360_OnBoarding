import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http-service';
import { Router } from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'app-trial-plan-details',
  templateUrl: './trial-plan-details.component.html',
  providers:[HttpService],
  styleUrls: ['./trial-plan-details.component.css']
})
export class TrialPlanDetailsComponent implements OnInit {

  constructor(public httpService: HttpService,public router: Router) { }


  ngOnInit() {
  }

  trialPlanSubmit(){
    this.httpService.createUserSubscr()
    .subscribe((value: any) => {
      let createUserSubscrStatus = JSON.parse(value._body);
      console.log(createUserSubscrStatus);
      this.router.navigate(['admin']);
    }, err => {
    });
  }
}