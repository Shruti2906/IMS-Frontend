import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

// const routes: Routes = [
//   { path: '', redirectTo: 'auth', pathMatch: 'full' },
//   {path:"auth", loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)},

// ];

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
