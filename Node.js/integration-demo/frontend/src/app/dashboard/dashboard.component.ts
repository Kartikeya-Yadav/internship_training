import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  message : string = '';

  constructor(private userService: UserService){}

  getMassage(){
    this.userService.getMessage().subscribe({
      next: (responce) => {
        this.message = responce.toString();
      },
      error: (error) => {
        this.message = (error as Error).message;
      }
    });
  }

}
