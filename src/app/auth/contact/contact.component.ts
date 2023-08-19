import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  constructor() { }

    contactForm:any;

    ngOnInit(): void{
      this.contactForm = new FormGroup({
        "firstname": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "lastname": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "email": new FormControl(null,[Validators.required,Validators.email]),
        "mobno": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])


      });

    }
    submitData(){

      console.log(this.contactForm.value);

      if(this.contactForm.valid)
      {
        alert('Thank you');
        this.contactForm.resert(); //reset form values
      }

    }

    get firstname() {return this.contactForm.get('firstname');}
    get lastname() {return this.contactForm.get('lastname');}
    get email() {return this.contactForm.get('email');}
    get mobno() {return this.contactForm.get('mobno');}



}
