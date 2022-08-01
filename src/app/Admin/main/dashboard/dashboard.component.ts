import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/services/pages/dashboard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../main/shared/sharedstyle.scss']
})
export class DashboardComponent implements OnInit {
  totalGuest! : number
  roomCount! : number
  bookings : any
  rooms : any
  busyFree = ""
  class=""
  guests : any
  activeGuest : any
  nonActive : any
  constructor(private dashboard : Dashboard) { }

  ngOnInit(): void {
    const setLocalData =JSON.parse(localStorage.getItem('login_credentails')!)
    const id = setLocalData.details._id

    this.dashboard.dashboard(id).subscribe((data:any)=> {
      console.log(data.payload)
      this.totalGuest = data['guest total count']
      this.roomCount = data['total room count']
      this.bookings = data.recentBookings
      this.rooms = data.rooms
      this.guests = data.guest
      this.nonActive = data.nonActiveGuest            
    })

   
  }

}
