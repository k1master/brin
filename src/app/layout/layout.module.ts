import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  declarations: [LayoutComponent],
  imports: [NgZorroAntdModule, CommonModule, RouterModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}