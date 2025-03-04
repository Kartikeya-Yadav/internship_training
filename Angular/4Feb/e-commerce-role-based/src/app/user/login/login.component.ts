import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Role } from '../../auth/role.enum';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService) { }

  onSubmit() {
    console.log(this.user.value);
    const newUser = {
      email: this.user.value.email!,
      password: this.user.value.password!,
      role: Role.Customer
    }

    this.userService.cheakLogin(newUser);
  }
}

