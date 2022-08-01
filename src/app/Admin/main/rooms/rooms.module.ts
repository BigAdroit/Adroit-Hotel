import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedMoudleModule } from '../shared-moudle/shared-moudle.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    RoomsComponent,
    CreateRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedMoudleModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule  ]
})
export class RoomsModule { }
