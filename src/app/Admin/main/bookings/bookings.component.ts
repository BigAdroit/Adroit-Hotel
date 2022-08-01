import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/services/pages/bookings/bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss', '../../main/shared/sharedstyle.scss']
})
export class BookingsComponent implements OnInit {
  allBookings : any
  count : any
  p = 1
  constructor(private bookings : Bookings) { }

  ngOnInit(): void {
    this.bookings.getAllBooking().subscribe((data)=>{
      this.count = data.total_count
      this.allBookings = data.bookings
    })
  }

}
