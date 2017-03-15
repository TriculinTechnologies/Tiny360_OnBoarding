import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanDetailsComponent } from './plan-details.component';
import { PlanDetailsRoutingModule } from './plan-details-routing.module';
import { HttpService } from '../../shared/services/http-service';
import { HttpModule} from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
    PlanDetailsRoutingModule,
    HttpModule
  ],
  declarations: [PlanDetailsComponent],
  exports:[PlanDetailsComponent],
})
export class PlanDetailsModule { }