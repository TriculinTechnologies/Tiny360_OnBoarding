import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSettingsComponent } from './global-settings.component';
import { GlobalSettingsRoutingModule } from './global-settings-routing.module';

import { ClothSettingsComponent }    from './cloth-settings/cloth-settings.component';
import { StoreSettingsComponent }    from './store-settings/store-settings.component';
import { GeneralSettingsComponent }    from './general-settings/general-settings.component';
import { CostCenterComponent }    from './cost-center/cost-center.component';


@NgModule({
  imports: [
    CommonModule,
    GlobalSettingsRoutingModule
  ],
  declarations: [
    GlobalSettingsComponent,
    ClothSettingsComponent,
    StoreSettingsComponent,
    GeneralSettingsComponent,
    CostCenterComponent
  ],
  exports:[
    GlobalSettingsComponent,
    ClothSettingsComponent,
    StoreSettingsComponent,
    GeneralSettingsComponent,
    CostCenterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GlobalSettingsModule { }