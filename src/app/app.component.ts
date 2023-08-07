import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'IMS-Frontend';

  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  loginSuccess: boolean = false;

  registrationFail: String = '';
  loginFail: String = '';

  constructor(private http: HttpClient, private router: Router) {}

  aboutUs(pageName: string):void{
    this.router.navigate([`${pageName}`]);
  }

  onSubmitReg() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.http.post('https://ims-backend-bxe0.onrender.com/apis/users/register', data).subscribe(
      (response) => {
        console.log('Registration successful.');
        this.loginSuccess = false;
        this.registrationSuccess = true;
        this.registrationFail = '';
      },
      (error) => {
        console.error('Registration failed:', error);
        this.loginSuccess = false;
        this.registrationFail = error;
      }
    );
  }


  onSubmitLogin() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.http.post('https://ims-backend-bxe0.onrender.com/apis/users/login', data).subscribe(
      (response) => {
        console.log('Login successfull.!');
        this.registrationSuccess = false; // reset registration success message
        this.registrationFail = ''; // reset registration failure message
        this.loginSuccess = true;
        this.loginFail = '';
      },
      (error) => {
        console.error('Login failed:', error),
          (this.registrationSuccess = false); // reset registration success message
        this.loginFail = error;
        this.registrationFail = ''; // reset registration failure message
      }
    );


  }





}
