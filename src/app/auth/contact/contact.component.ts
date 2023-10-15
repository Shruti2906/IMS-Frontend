
import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
 

  constructor(private authService:AuthService, private formBuilder: FormBuilder) { }

    contactForm:any;

    ngOnInit(): void{
      this.contactForm = this.formBuilder.group({
        firstname: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
        lastname: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
        mobno: ['', [Validators.required,Validators.pattern('^[6789]{1,1}[0-9]{9,9}$'), Validators.minLength(10), Validators.maxLength(10)]],
        message: ['',Validators.required] // Assuming 'message' is not a required field
      });

    }
    submitData(){

      console.log(this.contactForm.value);

   
      if(this.contactForm.invalid)
      {
       
       return;
      }

    }
    resetForm(){
      this.contactForm.reset();
    }


    public addEnquiry(){
      if (this.contactForm.valid) {
        // Handle form submission
        console.log(this.contactForm.value);
        const {firstname,lastname,email,mobno,message} = this.contactForm.value;
        console.log('msg: ',message)
        const reqBody = {
          firstname: firstname,
          lastname: lastname,
          email:email,
          mobno: mobno,
          message: message,
         
        };
         this.authService.addEnquiry(reqBody).subscribe(
           {
             next: (data: any) => {
                  swal.fire('Enquiry sent successfull !');
                   console.log('success')
               
          },
        
          }
        );
      } else {
        // Display validation errors
        Object.keys(this.contactForm.controls).forEach(key => {
          this.contactForm.get(key).markAsTouched();
        });
      }
   
 
  }

  }