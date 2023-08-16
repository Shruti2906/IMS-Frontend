import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

// const routes: Routes = [
//   { path: '', redirectTo: 'auth', pathMatch: 'full' },
//   {path:"auth", loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)},

// ];

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path:"auth", loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
