import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from 'src/services/roomServices/room-service.service';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent implements OnInit {
  Foods : any
  Drinks : any
  constructor(private diningService : RoomServiceService) { }

  ngOnInit(): void {
    this.Foods = this.diningService.getFood()
    this.Drinks = this.diningService.getDrinks()
  }

}
