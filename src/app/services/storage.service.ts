import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setToken(jwtToken:string){
      localStorage.setItem("token",jwtToken);
  }
  public getToken(){
    return localStorage.getItem("token");
  }

  public setRole(role:string){
    localStorage.setItem("role",role);
  }
  public getRole(){
    return localStorage.getItem("role");
  }

  public clear(){
    localStorage.clear();
  }
}
