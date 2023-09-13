import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent {
  
  name: string="";
  description: string="";
  fees: number=0;
   
  constructor(private coursesService: CoursesService) { }

   onSubmit() {
    let bodyData = {
      "name": this.name,
      "description": this.description,
      "fees": this.fees,
    };
    this.coursesService.addCourse(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Added course successfully")
      this.name="";
      this.description="";
      this.fees=0;
    });
  }
}
