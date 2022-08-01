import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiningBarComponent } from './dining-bar.component';

const routes: Routes = [{ path: '', component: DiningBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiningBarRoutingModule { }
