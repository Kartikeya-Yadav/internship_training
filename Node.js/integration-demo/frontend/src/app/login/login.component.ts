import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  message = '';

  constructor(private userService: UserService, private router:Router){}

  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  onSubmit(){
    console.log(this.user.value);

    this.userService.loginUser(this.user.value).subscribe({
      next: (response) => {
        console.log('User data sent successfully');
        
        localStorage.setItem('token', response.toString());
        this.router.navigate(['./profile'])
      },
      error: (error) => {
        console.error('Error sending user data:', error);
        this.message = error.error.err;
      },
    });
    
  }

}
