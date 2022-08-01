import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

const routes: Routes = [
  { path: '', component: BookingsComponent },
  { path: 'view-bookings/:id', component:ViewBookingsComponent },
  { path: 'create-bookings', component: CreateBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
