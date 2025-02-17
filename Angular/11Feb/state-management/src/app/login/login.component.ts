import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user =''

  constructor(private auth: AuthService){}

  logIn(user: string){
    this.auth.logIn(user);
  }

  logOut(){
    this.auth.logOut()
  }
}
