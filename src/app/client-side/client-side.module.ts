import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { DiningComponent } from './pages/dining/dining.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './client-login/login/login.component';


@NgModule({
  declarations: [
    ClientSideComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HomeComponent,
    RoomComponent,
    DiningComponent,
    ServiceComponent,
    AboutComponent,
    BookRoomComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientSideModule { }
