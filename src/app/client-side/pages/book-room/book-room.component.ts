import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/services/pages/bookings/bookings';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {
  id: any
  currentRoom : any
  formData! : FormGroup
  success = false 
  loading : boolean = false 
  constructor(private ActivatedRoute: ActivatedRoute, private roomService : RoomServiceService, private bookings : Bookings, private route : Router) { }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.roomService.getAroom(this.id).subscribe((data)=>{
      console.log(data)
      this.currentRoom = data.room
    })

    this.createForm()
  }

  createForm() {
    this.formData = new FormGroup({
      firstname : new FormControl ('', [Validators.required]),
      lastname : new FormControl ('', [Validators.required]),
      email : new FormControl ('', [Validators.required]),
      phone : new FormControl ('', [Validators.required]),
      clock_in_date : new FormControl ('', [Validators.required]),
      clock_out_date : new FormControl ('', [Validators.required]),
      clock_in_time : new FormControl ('', [Validators.required]),
      clock_out_time : new FormControl ('', [Validators.required]),
    })
  }

  bookNow(data:any) {
    this.loading = true
    data.booking_code = Date.now()
    data.room_name = this.currentRoom.roomName
    data.room_id = this.id
    this.bookings.createBooking(data).subscribe((data)=>{
      if(data.hasErrors === false ) {
        this.loading = false
        this.success = true
        setTimeout(()=>{
          this.route.navigate(['/'])
        }, 1500)
      }
    })
    this.formData.reset()
  }
}
