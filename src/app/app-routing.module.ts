import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/services/gaurds/authGuard/authguard.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./client-side/client-side.module').then(m => m.ClientSideModule) }, 
  { path: 'auth', loadChildren: () => import('./Admin/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./Admin/main/main.module').then(m => m.MainModule), canActivate:[AuthguardGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
