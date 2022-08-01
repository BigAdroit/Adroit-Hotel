import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';



import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { SharedMoudleModule } from '../shared-moudle/shared-moudle.module';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GuestComponent,
    CreateGuestComponent,
    ViewGuestComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedMoudleModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ]
})
export class GuestModule { }
