import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss', '../../../main/shared/sharedstyle.scss']
})
export class CreateRoomComponent implements OnInit {
  formData! : FormGroup
  roomImage! : File;
  showModal : boolean = false
  constructor(private roomServices : RoomServiceService, private route : Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  onSelectFile(event: any) {
    if(event.target.files?.length > 0 ) {
      const file = event.target.files[0];
      this.roomImage = file
    }
    console.log(this.roomImage)
  }
  
  createForm() {
    this.formData = new FormGroup({
      roomName : new FormControl('', [Validators.required]),
      roomDescription : new FormControl('', [Validators.required]),
      roomPrice : new FormControl('', [Validators.required]),
      roomAccessCode : new FormControl('', [Validators.required]),
      roomContact : new FormControl('', [Validators.required]),

    })
    }

    onSubmit(data:any){
      const formValue = new FormData()
      formValue.append('roomName', data.roomName)
      formValue.append('roomDescription',data.roomDescription)
      formValue.append('roomPrice', data.roomPrice)
      formValue.append('roomAccessCode', data.roomAccessCode)
    formValue.append('roomContact', data.roomContact)
    formValue.append('roomImage', this.roomImage)
    
    console.log(formValue)
    this.roomServices.createRoom(formValue).subscribe((data)=>{
      if(data.hasErrors === false) {
        this.showModal = true 

        setTimeout(() => {
          this.route.navigate(["admin/rooms"])
        }, 1500);
      }

    })
  }

  displayOff() {
    this.showModal = false 
  }
}