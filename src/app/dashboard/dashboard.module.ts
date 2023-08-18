import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';

//import { DashboardRoutingModule } from './dashboard-routing.module';
// import { HeaderComponent } from './header/header.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';

// const routes: Routes = [
//   {
//   }
// ];

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // RouterModule.forChild(routes),
  ],
  // exports: [RouterModule],
})
export class DashboardModule { }
