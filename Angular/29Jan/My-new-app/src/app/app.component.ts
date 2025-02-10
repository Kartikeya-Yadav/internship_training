import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-new-app';

  myName = "Lufy";
  myId = 11;

  data = '';
  reciveData(message: any){
    console.log(message);
    this.data = message;
  }
}
