import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  newUserValue: string = '';

  constructor(private auth: AuthService){}

  updateprofile(newUserValue: string){
    this.auth.updateProfile(newUserValue);
  }

}
