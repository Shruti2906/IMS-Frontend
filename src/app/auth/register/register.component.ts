import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';

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
          console.log('Registration successfull.');

          this.registrationSuccess = true;

        },
        (error) => {
          console.error('Registration failed:', error);

          this.registrationFail = true;
        }
      );
  }
}
