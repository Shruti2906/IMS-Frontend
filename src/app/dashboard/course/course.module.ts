import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { ListCourseComponent } from './Instructor/list-course/list-course.component';
import { AddCoursesComponent } from './Instructor/add-courses/add-courses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CourseComponent,
    ListCourseComponent,
    AddCoursesComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ]
})
export class CourseModule { }
