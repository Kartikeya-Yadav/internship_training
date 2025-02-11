import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  username: string | null = null;

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.user$.subscribe(value => this.username = value);
  }

}
