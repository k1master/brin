import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule, LayoutModule],
})

export class DashboardModule { }