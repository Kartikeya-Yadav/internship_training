import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = '';

  constructor(private auth: AuthService){}

  logIn(user: string){
    this.auth.logIn(user);
  }

  logOut(){
    this.auth.logOut()
  }
}
