import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import swal from 'sweetalert2';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

registerForm!:FormGroup
submitted = false;
showPassword: boolean = false;

  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  registrationFail: boolean = false;

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    password2: new FormControl('',Validators.required)
  });


  constructor(private http: HttpClient,private formBuilder: FormBuilder, private Authservice:AuthService,private router: Router )   {  }


  visible1:boolean = true;
  visible2:boolean = true;
  changetype1:boolean =true;
  changetype2:boolean =true;

  viewpass1(){
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }

  viewpass2(){
    this.visible2 = !this.visible2;
    this.changetype2 = !this.changetype2;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.minLength(11), Validators.email]],
      password:['',[Validators.required, Validators.minLength(8), this.passwordValidator]],
      password2:['',[Validators.required, Validators.minLength(8)]],
    }, { validator: this.passwordMatchValidator });
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

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const password2 = control.get('password2');

    if (!password || !password2) {
      return { passwordMismatch: true };
    }

    if (password2.value && password.value !== password2.value) {
      password2.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  onSubmitReg() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value;
    const reqBody = { email, password: password };

    this.Authservice.register(reqBody).subscribe({
      next: (data) => {
        swal.fire('Thank You For Registering');
        this.registrationSuccess = true;
        this.router.navigate(['login']);
      },
      error: (err) => {
        swal.fire('Registration failed, Please Repeat the Process:', err);
        this.registrationFail = true;
      }
    });
  }

}
