import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [SettingsRoutingModule, LayoutModule],
})

export class SettingsModule { }