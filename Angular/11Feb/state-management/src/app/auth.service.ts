import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User{
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {

  private userList: string[] = [
    'Lufy',
    'Zoro',
    'Sanji'
  ];

  private userList2: User[] =[
    {id: 1, name: 'Lufy', email: 'lufy@gmail', password: '12345'},
    {id: 2, name: 'Zoro', email: 'zoro@gmail', password: '12345'},
    {id: 3, name: 'Sanji', email: 'sanji@gmail', password: '12345'},
  ];

  private user = new BehaviorSubject<string | null>(null);
  user$ = this.user.asObservable();

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  logIn(username: string) {
    if (-1 !== this.userList.indexOf(username)) {
      this.user.next(username);
      this.isLoggedIn.next(true)
      localStorage.setItem('user', username);
      localStorage.setItem('isLoggedIn', 'true');
      alert('User Logged in . . .');

    }
    else {
      alert('This User Does not exist');
    }

  }

  logOut() {
    this.user.next(null);
    this.isLoggedIn.next(false)
    localStorage.removeItem('user');
    localStorage.setItem('isLoggedIn', 'false');
  }

  updateProfile(newUserValue: string) {
    this.user.next(newUserValue);
    localStorage.setItem('user', newUserValue);
  }
}
