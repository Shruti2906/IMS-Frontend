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
import { Router } from '@angular/router';
import {StorageService} from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {


  loginForm!:FormGroup
  submitted1 = false;


  registrationSuccess: boolean = false;
  loginSuccess: boolean = false;

  registrationFail: String = '';
  loginFail: String = '';



  constructor(private http: HttpClient,private formBuilder: FormBuilder, private storageService: StorageService, private Authsrevice:AuthService, private router:Router)  { }


  visible3:boolean = true;
  changetype3:boolean =true;

  viewpass3(){
    this.visible3 = !this.visible3;
    this.changetype3 = !this.changetype3;
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email1:['', [Validators.required, Validators.minLength(11), Validators.email]],
      password3:['',[Validators.required, Validators.minLength(8), this.passwordValidator]]
    });
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
    this.submitted1=true

    if(this.loginForm.invalid)
    {
      return;
    }
    const {email1, password3} = this.loginForm.value;
    const reqBody = {
      email:email1,
      password: password3
    };
    console.log(reqBody)

    this.Authsrevice.logIn(reqBody).subscribe(
      {
        next: (data) => {
              swal.fire('Login successfull.!');
              this.registrationSuccess = false; // reset registration success message
              this.registrationFail = ''; // reset registration failure message
              this.loginSuccess = true;
              this.loginFail = '';
              this.storageService.setToken(data.token);
              this.storageService.setRole(JSON.parse(atob(data.token.split('.')[1])).type);

              this.router.navigate(['dashboard/course']);
            //  this.router.navigate(['/../dashboard']);
            // this.router.navigate(['/studentdashboard']);
        },
        error: (err) => {
          swal.fire('Login failed!!!', err), (this.registrationSuccess = false); // reset registration success message
          this.loginFail = err;
          this.registrationFail = ''; // reset registration failure message
        }
      }
    );

  }

}
