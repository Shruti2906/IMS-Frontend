import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  loginSuccess: boolean = false;

  registrationFail: String = '';
  loginFail: String = '';

  constructor(private http: HttpClient) {}

  onSubmitLogin() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.http.post(`${environment.api}/apis/users/login`, data).subscribe(
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
