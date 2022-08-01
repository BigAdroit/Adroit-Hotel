import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss', '../../main/shared/sharedstyle.scss']
})
export class RoomsComponent implements OnInit {
  allRooms : any
  count! : number 
  p: any = 1;
  inputText = ""
  text : any = ""
  showModal : boolean = true
     
  constructor(private roomService : RoomServiceService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe((data)=>{
      console.log(data)
      this.allRooms = data.rooms
      this.count = data['total count']
    })
    console.log(this.text)
  }
  
  displayOff() {
    this.showModal = false
  }
}
