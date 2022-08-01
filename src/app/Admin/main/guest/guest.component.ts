import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/services/pages/guest/guest';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss', '../../main/shared/sharedstyle.scss']
})
export class GuestComponent implements OnInit {
  Guests : any
  totalGuest! : number
  p = 1
  constructor(private guestService : Guest, private roomService : RoomServiceService) { }

  ngOnInit(): void {
    this.guestService.getGuests().subscribe((data)=>{
      this.Guests = data['active guest']
      console.log(data['active guest'])
      console.log(data.room)
      this.totalGuest = data['total count of Present guest']
      })
  }

}
