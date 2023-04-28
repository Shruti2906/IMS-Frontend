import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  loginSuccess: boolean = false;

  registrationFail: String = '';
  loginFail: String = '';

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient) {}

  onSubmitReg() {
    const data = this.myForm.value;

    this.http
      .post('https://ims-backend-bxe0.onrender.com/apis/users/register', data)
      .subscribe(
        (response) => {
          console.log('Registration successfull.');

          this.registrationSuccess = true;
          this.registrationFail = '';
        },
        (error) => {
          console.error('Registration failed:', error);

          this.registrationFail = error;
        }
      );
  }
}
