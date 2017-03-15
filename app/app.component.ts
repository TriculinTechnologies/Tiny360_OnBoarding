import { Component,OnDestroy } from '@angular/core';
//import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
//import {Keepalive} from '@ng-idle/keepalive';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
`,
})
export class AppComponent implements OnDestroy  { 



  ngOnDestroy() {
     window.sessionStorage.clear();
  }
   
}
