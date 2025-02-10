import { Component } from '@angular/core';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  message: string;
  
  constructor(private mess: WelcomeService){
    this.message = mess.getMassage();
  }
}
