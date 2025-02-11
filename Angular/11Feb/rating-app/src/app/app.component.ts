import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rating-app';

  rating: number = 0;

  setRating(star: number){
    this.rating = star;
  }
}
