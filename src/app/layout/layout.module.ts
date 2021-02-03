import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsUpdateComponent } from '../pages/controlpanel/settings/components/settings-update';
@NgModule({
  declarations: [LayoutComponent, SettingsUpdateComponent],
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