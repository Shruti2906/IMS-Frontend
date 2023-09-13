import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';// Imported service


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: any[] = [];
  route: ActivatedRoute | null | undefined;

  constructor(private coursesService: CoursesService, private router: Router) {}

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
  
  navigateToAddCourse() {
    this.router.navigate(['/dashboard/course/add-courses']);
  }


}
