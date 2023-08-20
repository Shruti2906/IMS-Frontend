import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

// const routes: Routes = [
//   {path: 'register', component: RegisterComponent},
//   {path:'login', component:LoginComponent}
// ];
// const routes: Routes = [
//   {
//     path: '', // 1. Empty path (root path)
//     component: LandingPageComponent, // 2. Component to render for the root path
//     children: [ // 3. Child routes within the LandingPageComponent
//       { path: '', redirectTo: 'register', pathMatch: 'full' }, // 4. Redirect to 'register' when the root path is accessed
//       { path: 'register', component: RegisterComponent }, // 5. Route for 'register' component
//       { path: 'login', component: LoginComponent }, // 6. Route for 'login' component
//       { path: 'aboutus', component: AboutusComponent } // 7. Route for 'aboutus' component
//     ]
//   }
// ];

// const routes: Routes = [
//   { path: '',component:LandingPageComponent, children: [
//     { path: '', redirectTo: 'main', pathMatch: 'full'},
//     { path:"main", component: LandingPageComponent},
//     { path:"login", component: LoginComponent},
//     { path:"register", component: RegisterComponent},
//     { path: 'aboutus', component: AboutusComponent } // 7. Route for 'aboutus' component
//       // { path: 'register', component: RegisterComponent }, // 5. Route for 'register' component
//       // { path: 'login', component: LoginComponent }, // 6. Route for 'login' component
//       // { path: 'aboutus', component: AboutusComponent } // 7. Route for 'aboutus' component
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
