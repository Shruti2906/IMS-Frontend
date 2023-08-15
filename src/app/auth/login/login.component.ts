import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'environments/environment';
import swal from 'sweetalert2';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';



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

  constructor(private http: HttpClient)  { }

  onSubmitLogin() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.http.post(`${environment.api}/apis/users/login`, data).subscribe(
      (response) => {
        swal.fire('Login successfull.!');
        this.registrationSuccess = false; // reset registration success message
        this.registrationFail = ''; // reset registration failure message
        this.loginSuccess = true;
        this.loginFail = '';
      },
      (error) => {
        swal.fire('Login failed!!!', error),
          (this.registrationSuccess = false); // reset registration success message
        this.loginFail = error;
        this.registrationFail = ''; // reset registration failure message
      }
    );

  }

}
