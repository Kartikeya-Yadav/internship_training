import { Injectable } from '@angular/core';
import { Role } from '../auth/role.enum';

export interface User{
  name: string;
  email: string;
  password: string;
  role: Role
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userlist: User[] = [
    {name: 'Admin', email: 'admin@gmail', password: '12345', role: Role.Admin}
  ]

  constructor() { }

  addUser(user: User){
    this.userlist.push(user);
    console.log("User Registered . . .");
    
  }

  cheakLogin(newUser: any){
    const index = this.userlist.findIndex((user) => 
      user.email === newUser.email && user.password === user.password);
    
    if(index !== -1){
      console.log("User logged in");
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', newUser.role);
      console.log("User logged in. . .");
    }
    //If the admin login
    if(newUser.email === 'admin@gmail'){
      localStorage.setItem('role', 'Admin');
    }
  }

}
