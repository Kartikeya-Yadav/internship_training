import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userProfile = {}

  constructor(private userService: UserService){}

  ngOnInit(): void {
  
    this.userService.getProfile().subscribe({
      next: (response) =>{
        this.userProfile = response;
      },
      error: (error) =>{
        console.error(error);
      }
    })
  }
  
 
}
