import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { SharedMoudleModule } from '../shared-moudle/shared-moudle.module';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

@NgModule({
  declarations: [
    BookingsComponent,
    CreateBookingComponent,
    ViewBookingsComponent,
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedMoudleModule,
    NgxPaginationModule,
  ]
})
export class BookingsModule { }
