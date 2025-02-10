import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route: Router){}


  login(role: string){
    localStorage.setItem('isLogedIn', 'true');
    localStorage.setItem('role', role);
    alert(`You are logged in as ${role}`);
    this.route.navigate(['/dashboard']);
  }

}
