import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { GuestComponent } from './guest.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';

const routes: Routes = [
  { path: '', component: GuestComponent },
  { path: 'view-guest/:id', component: ViewGuestComponent},
  { path: 'create-guest', component : CreateGuestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
