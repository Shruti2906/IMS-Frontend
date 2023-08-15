import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import swal from 'sweetalert2';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  registrationFail: boolean = false;

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });


  constructor(private http: HttpClient) {}

  onSubmitReg() {
    const data = this.myForm.value;

    this.http
      .post(`${environment.api}/apis/users/register`, data)
      .subscribe(
        (response) => {
          swal.fire('Thank You For Registering');

          this.registrationSuccess = true;

        },
        (error) => {
          swal.fire('Registration failed, Please Repeat the Process:', error);

          this.registrationFail = true;
        }
      );

  }
}
