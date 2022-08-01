import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Guest } from 'src/services/pages/guest/guest';

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.scss', '../../../main/shared/sharedstyle.scss']
})
export class CreateGuestComponent implements OnInit {
  rooms : any
  formData! : FormGroup
  constructor(private roomService : RoomServiceService, private guestService :Guest) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe((data:any)=> {
      this.rooms = data.availableRooms
      console.log(data)
    })
    this.createForm()
  }

  createForm() {
    this.formData = new FormGroup({
      firstname : new FormControl('', [Validators.required]),
      lastname : new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone : new FormControl('', [Validators.required]),
      room_name : new FormControl('', [Validators.required]),
      clock_in_date : new FormControl('', [Validators.required]),
      clock_out_date : new FormControl('', [Validators.required]),
      clock_in_time : new FormControl('', [Validators.required]),
      clock_out_time : new FormControl('', [Validators.required])
    })

  }

  onSubmit(data:any) {
    console.log(data)
    let room_id = ""
    this.rooms.filter((element:any)=> {
      if(element.roomName === data.room_name) {
        room_id = element._id
      }
    })
    data.room_id = room_id
    
    this.guestService.createGuest(data).subscribe((data:any)=> {
      console.log(data)
    })
    this.formData.reset()
  }

}
