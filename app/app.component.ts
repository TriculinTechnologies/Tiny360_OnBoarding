import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './shared/services/http-service';

@Component({
  selector: 'my-app',
  template: `
   <router-outlet></router-outlet>
`,
})
export class AppComponent implements OnInit,OnDestroy { 
  ngOnInit() {
    // if (window.location.hostname == 'test.domain.com'){
    //   console.log(window.location.hostname);

    //   setTimeout(()=>{
    //      this.router.navigate(['/onboarding']);
    //   },2000)
    // }
  }
  constructor(public router: Router){
    this.router.events.subscribe(event => {
 if (event.constructor.name === 'NavigationEnd'
     && window.location.hostname == 'test.domain.com'
     && event.url == '/') {
       console.log(event.url);
       this.router.navigate(['/onboarding']);
     }
 });
  }
   ngOnDestroy() {
     window.sessionStorage.clear();
  }
}
