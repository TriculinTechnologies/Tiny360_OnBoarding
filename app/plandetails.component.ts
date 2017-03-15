import { Component } from '@angular/core';

@Component({
 moduleId: module.id,
 selector: 'pg-plandetails',
 templateUrl: 'plandetails.component.html',
 styleUrls:['plandetails.component.css']
})
export class PlandetailsComponent {

  tabIndex:number=1;
  tab(tabIdx:any){
      this.tabIndex=tabIdx; 
  }
}