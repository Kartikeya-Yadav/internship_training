import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Role } from '../../auth/role.enum';



@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService){}

  onSubmit(){
    console.log(this.user.value);
    const newUser: User = {
      name: this.user.value.name!,
      email: this.user.value.email!,
      password: this.user.value.password!,
      role: Role.Customer
    }
    this.userService.addUser(newUser);
  }
}
