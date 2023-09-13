import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { ListCourseComponent } from './Instructor/list-course/list-course.component';
import { AddCoursesComponent } from './Instructor/add-courses/add-courses.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
       {path:'list-course',component:ListCourseComponent},
       {path:'add-courses',component:AddCoursesComponent}   
    ]

  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
