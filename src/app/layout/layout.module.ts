import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsUpdateComponent, SettingsTableComponent } from '../pages/controlpanel/settings/components';
@NgModule({
  declarations: [
    LayoutComponent, 
    SettingsUpdateComponent,
    SettingsTableComponent
  ],
  imports: [
    NgZorroAntdModule, 
    CommonModule, 
    RouterModule,     
    FormsModule,
    ReactiveFormsModule,
    SidebarModule.forRoot()
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}