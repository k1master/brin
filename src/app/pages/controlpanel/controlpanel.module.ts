import { NgModule } from '@angular/core';

import { ControlPanelComponent } from './controlpanel.component';
import { ControlPanelRoutingModule } from './controlpanel-routing.module';

@NgModule({
  imports: [ControlPanelRoutingModule],
  declarations: [ControlPanelComponent],
  exports: [ControlPanelComponent]
})

export class ControlPanelModule { }