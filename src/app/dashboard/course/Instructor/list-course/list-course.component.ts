import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';// Import your service

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: any[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }


  getCourses(): void {
    this.coursesService.getCourses()
      .subscribe(
        (data: any) => {
          this.courses = data.data;
        },
        (error: any) => {
          console.error('Error fetching courses:', error);
        }
      );
  }
}
