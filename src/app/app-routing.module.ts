import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:"auth", loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path: 'register', component: RegisterComponent},
  {path:'aboutus', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
