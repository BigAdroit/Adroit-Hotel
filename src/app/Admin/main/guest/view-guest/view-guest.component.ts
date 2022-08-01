import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/services/pages/guest/guest';

@Component({
  selector: 'app-view-guest',
  templateUrl: './view-guest.component.html',
  styleUrls: ['./view-guest.component.scss', '../../../main/shared/sharedstyle.scss']
})
export class ViewGuestComponent implements OnInit {
  id: any
  guestDetails : any
  successMessage : boolean = false
  days : any
  daysLeft : any
  dateDue : boolean = false 
  constructor(private activatedRoute : ActivatedRoute, private guest : Guest, private route : Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.guest.getGuest(this.id).subscribe((data)=>{
      this.guestDetails = data.Guest

      let date1 = new Date(this.guestDetails.clock_in_date);
      let date2 = new Date(this.guestDetails.clock_out_date);
      let todayDate = new Date()

      // To calculate the time difference of two dates
      let Difference_In_Time = date2.getTime() - date1.getTime();
      let remainingTime = date2.getTime() - todayDate.getTime()

      // To calculate the no. of days between two dates
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.days = Difference_In_Days
      let daysValue = Math.floor(remainingTime / (1000 * 3600 * 24)); 
      console.log(daysValue)  
      if(daysValue < 0 ) {
        this.daysLeft = "Please you are over staying your"
        this.dateDue = true
      } else {
        this.daysLeft = Math.abs(daysValue)
      }
    })
  }

  checkOut() {
    this.guestDetails.isPresent = false
    console.log(this.guestDetails)
    this.guest.checkOut(this.id, this.guestDetails).subscribe((data)=>{
      if(data.hasError === false) {
        this.successMessage = true
        setTimeout(()=>{
          this.route.navigate(['/admin/guest'])
           }, 1500)
      }
    })
  }

}
