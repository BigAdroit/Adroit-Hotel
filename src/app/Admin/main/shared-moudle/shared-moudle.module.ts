import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TableHeadComponent } from '../shared/table-head/table-head.component';
import { ChartComponent } from '../shared/chart/chart.component';
import { FormsModule } from '@angular/forms';
import { SuccessModalComponent } from '../shared/success-modal/success-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    TableHeadComponent, 
    ChartComponent,
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    TableHeadComponent, 
    ChartComponent,
    SuccessModalComponent
  ]
})
export class SharedMoudleModule { }
