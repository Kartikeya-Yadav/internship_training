import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<string | null>(null);
  user$ = this.user.asObservable();

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  logIn(username: string){
    this.user.next(username);
    this.isLoggedIn.next(true)
    localStorage.setItem('user', username);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logOut(){
    this.user.next(null);
    this.isLoggedIn.next(false)
    localStorage.removeItem('user');
    localStorage.setItem('isLoggedIn', 'false');
  }
  
}
