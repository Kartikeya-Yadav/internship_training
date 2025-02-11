import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  username:string|null = '';

  constructor(private auth: AuthService){
    this.auth.user$.subscribe(value => {
      this.username = value;
    })
  }

  

}
