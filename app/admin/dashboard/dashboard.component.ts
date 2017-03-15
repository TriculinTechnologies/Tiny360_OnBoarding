import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/onboarding']); 
    // sessionStorage.removeItem('sessionId');
    // sessionStorage.removeItem('email&pwd');
  }

}