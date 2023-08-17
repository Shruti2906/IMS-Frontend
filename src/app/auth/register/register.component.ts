import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import swal from 'sweetalert2';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

registerForm!:FormGroup
submitted = false;

  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  registrationFail: boolean = false;

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('',Validators.required)
  });


  constructor(private http: HttpClient,private formBuilder: FormBuilder )   {  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.minLength(11), Validators.email]],
      password1:['',[Validators.required, Validators.minLength(8), this.passwordValidator]],
      password2:['',[Validators.required, Validators.minLength(8), this.passwordValidator]],
    }, { validator: this.passwordMatchValidator }); 
  } 
  

  onSubmit() {
    this.submitted=true
    
    if(this.registerForm.invalid)
    {
      return 
    } 
    
    //alert("Success");
  }
  
  /*
    */

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

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password1 = control.get('password1');
    const password2 = control.get('password2');

    if (!password1 || !password2 || password1.value !== password2.value) {
      return { passwordMismatch: true };
    }
    /*
    if (password1.value !== password2.value) {
      return { passwordMismatch: true };
    }
    */
    return null;
  }
  
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
