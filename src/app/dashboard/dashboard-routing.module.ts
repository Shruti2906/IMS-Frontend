import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children: [
      // { path: 'profile', component: ProfileComponent},
      // { path: 'dashboard', component: DashboardComponent},
      // { path: 'auth',loadChildren: () =>import('../auth/auth.module').then((m) => m.AuthModule)},
      { path: "course", loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
