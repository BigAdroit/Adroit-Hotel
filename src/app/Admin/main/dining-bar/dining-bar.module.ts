import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningBarRoutingModule } from './dining-bar-routing.module';
import { DiningBarComponent } from './dining-bar.component';
import { SharedMoudleModule } from '../shared-moudle/shared-moudle.module';


@NgModule({
  declarations: [
    DiningBarComponent
  ],
  imports: [
    CommonModule,
    DiningBarRoutingModule,
    SharedMoudleModule
  ]
})
export class DiningBarModule { }
