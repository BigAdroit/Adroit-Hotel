import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  rooms : any
  constructor(private roomService: RoomServiceService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe((data)=> {
      console.log(data)
      this.rooms = data.rooms
    })
  }

}
