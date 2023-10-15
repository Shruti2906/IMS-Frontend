import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent {
  route: ActivatedRoute | null | undefined;
  courseForm!: FormGroup;

  constructor(private coursesService: CoursesService,
    private fb: FormBuilder, private router: Router) {
      this.courseForm = this.fb.group({
        name: ['', Validators.required],
        description : ['', Validators.required],
        fees: [0,[Validators.required, Validators.min(0)]]
      });
    }

   onSubmit() {
  if(this.courseForm.valid) {

    const bodyData = {
      name: this.courseForm.value.name,
      description: this.courseForm.value.description,
      fees: this.courseForm.value.fees,
    };
    this.coursesService.addCourse(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Added course successfully")
      this.restForm();
    });
  }else{
    this.markFormFieldAsTouched();
  }
}
 restForm(){
  this.courseForm.reset({
    name: '',
    description: '',
    fees: 0
  });
 }
 markFormFieldAsTouched(){
  for(const controlName in this.courseForm.controls){
    if(this.courseForm.controls.hasOwnProperty(controlName)){
      this.courseForm.controls[controlName].markAllAsTouched();
    }
  }
 }

}
