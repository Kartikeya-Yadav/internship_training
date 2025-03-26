import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000'; 


  constructor(private http: HttpClient) {}


  getMessage(){
    return this.http.get(`${this.baseUrl}`);
  }

  registerUser(userData: any){
    return this.http.post(`${this.baseUrl}/users/register`, userData);
  }

  loginUser(userData: any){
    return this.http.post(`${this.baseUrl}/users/login`, userData);
  }

}
