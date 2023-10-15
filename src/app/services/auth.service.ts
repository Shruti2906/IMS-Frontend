import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  register(data:any): Observable<any> {
    console.log('in auth service');
    return this.http.post(`${environment.api}apis/users/register`,data, {observe: 'response'});
  }

  logIn(data: any): Observable<any> {
    return this.http.post(`${environment.api}apis/users/login`, data);
  }

  addEnquiry(data: any): Observable<any> {
    return this.http.post(`${environment.api}apis/users/addEnquiry`, data);
    //return this.http.post(`http://localhost:3000/apis/users/addEnquiry`, data);
    
  }
}
