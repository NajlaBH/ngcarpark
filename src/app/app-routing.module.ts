import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard.guard';


const routes: Routes = [
	{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 
	{ canActivate:[GuardGuard],path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
