import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Role } from '../../auth/role.enum';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: User = {
    name: '',
    email: '',
    password: '',
    role: Role.Customer
  }

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.currentUser = this.userService.viewProfile()!;
    console.log(this.currentUser);
    
  }

  

}
