import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMoudleModule } from '../shared-moudle/shared-moudle.module';

@NgModule({
  declarations: [
    DashboardComponent,
    
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMoudleModule
  ]
})
export class DashboardModule { }
