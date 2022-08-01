import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { AboutComponent } from './pages/about/about.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { DiningComponent } from './pages/dining/dining.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  { path: '', component: ClientSideComponent , children:[
    { path: "", component:HomeComponent},
    { path:"about", component: AboutComponent},
    { path:"room", component:RoomComponent},
    { path:"dining", component:DiningComponent},
    { path:"service", component:ServiceComponent},
    { path:"book-room/:id", component:BookRoomComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
