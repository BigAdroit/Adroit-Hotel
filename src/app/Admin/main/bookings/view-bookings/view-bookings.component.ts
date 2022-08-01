import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/services/pages/bookings/bookings';
import { Guest } from 'src/services/pages/guest/guest';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.scss', '../../../main/shared/sharedstyle.scss']
})
export class ViewBookingsComponent implements OnInit {
  id:any
  bookingDetails : any
  showModal : boolean = false
  showProceed : boolean = false
  loading : boolean = false
  successMessage = false
  constructor(private activeRoute : ActivatedRoute, private booking : Bookings, private route : Router, private guestService : Guest) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.booking.getOneBooking(this.id).subscribe((data)=> {
      this.bookingDetails = data.booking
      console.log(this.bookingDetails)
    })
    
  }

  proceed() {
    this.showModal = false 
    this.showProceed = true
  }

  makeGuest() {
    this.loading = true
    this.bookingDetails
    this.bookingDetails.isAccepted = true
    this.booking.acceptBookings(this.bookingDetails._id, this.bookingDetails).subscribe((data)=>{
      if(data.hasError=== false) {
        delete this.bookingDetails.isAccepted
        delete this.bookingDetails.isClosed
        delete this.bookingDetails.booking_code
        delete this.bookingDetails.dateCreated
        delete this.bookingDetails._id
        this.guestService.createGuest(this.bookingDetails).subscribe((data)=>{
          if(data.hasError === false ) {
              this.loading = false
              this.showProceed = false
              this.successMessage = true
              setTimeout(()=>{
              this.route.navigate(['/admin/guest'])
               }, 1500)
          }
        })
      }
    })
    
    
  }

}
