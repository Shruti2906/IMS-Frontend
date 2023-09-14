import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>('https://ims-backend-bxe0.onrender.com/apis/courses/getcourses');
  }
  addCourse(bodyData: any ): Observable<any> {
    return this.http.post('https://ims-backend-bxe0.onrender.com/apis/courses/addcourses',bodyData);
  }
}
