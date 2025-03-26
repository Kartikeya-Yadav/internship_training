import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserService) { }

  user = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(18, [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  onSubmit() {
    console.log(this.user.value);

    this.userService.registerUser(this.user.value).subscribe({
      next: (response) => {
        console.log('User data sent successfully:', response);
      },
      error: (error) => {
        console.error('Error sending user data:', error);
      },
    });

  }


}
