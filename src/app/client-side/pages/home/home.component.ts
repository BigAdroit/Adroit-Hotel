import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rooms : any[] = []
  date = new Date() 
  todaysDate = Date.now
  constructor(private roomService : RoomServiceService) { }

  ngOnInit(): void {
   this.roomService.getAllRooms().subscribe((data)=>{
      this.rooms = data.rooms
   })
   
   console.log(this.date.toString)
  }

}
