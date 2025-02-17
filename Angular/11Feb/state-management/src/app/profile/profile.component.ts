import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  username: string | null = null;

  constructor(private auth: AuthService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(value => {
      const name: string = value.get('name')!
      if(name){
        this.auth.logIn(name);
      }
    })

    this.auth.user$.subscribe(value => this.username = value);                                                  
  }

}
