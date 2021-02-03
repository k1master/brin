import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { LayoutModule } from '../../../layout/layout.module';
import { SidebarModule } from 'ng-sidebar';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SettingsRoutingModule, 
    LayoutModule, 
    BrowserModule,
    SidebarModule.forRoot()],
})

export class SettingsModule { }