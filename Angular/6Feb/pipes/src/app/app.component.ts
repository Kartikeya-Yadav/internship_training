import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';

  today: Date = new Date();
  myNumber: number = 34.456;
  amount: number = 100.5;
  tutorial: string = 'Creating Custom Pipe';

  card = '';
  
}
