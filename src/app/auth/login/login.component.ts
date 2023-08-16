import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
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

  loginForm!:FormGroup
  submitted1 = false;

  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  loginSuccess: boolean = false;

  registrationFail: String = '';
  loginFail: String = '';


  constructor(private http: HttpClient,private formBuilder: FormBuilder )  { } 


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email1:['', [Validators.required, Validators.minLength(11), Validators.email]],
      password3:['',[Validators.required, Validators.minLength(8), this.passwordValidator]]
    }); 
  } 

  onSubmit1() {
    this.submitted1=true
    
    if(this.loginForm.invalid)
    {
      return 
    } 
    
    //alert("Success");
  }

    // Custom password validator function
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

    if (!hasUppercase || !hasSpecialCharacter) {
      return { passwordRequirements: true };
    }

    return null;
  }


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
