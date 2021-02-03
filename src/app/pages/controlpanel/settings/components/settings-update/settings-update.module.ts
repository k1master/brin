import { NgModule } from '@angular/core';

import { SettingsUpdateComponent } from './settings-update.component';
import { SidebarModule } from 'ng-sidebar';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../../../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsUpdateComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    SidebarModule.forRoot()],
})

export class SettingsModule { }