import { Component } from '@angular/core';
import { Observable, timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RxJS-demo';

  //creating an obervable
  myObservable = new Observable(observer => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });

  observer = {
    next: (value: any) => console.log('Recived: ', value),
    error: (err: any) => console.error('Error: ', err),
    complete: () => console.log('Done. . . !') 
  }

  newObservable = new Observable(obj => {
    obj.next(1);
    obj.next(2);
    obj.complete();
    obj.next(3);
  });
  constructor() {
    // this.myObservable.subscribe(value => console.log(value));
    // this.newObservable.subscribe(this.observer);
    // setTimeout(() => this.newObservable.subscribe(this.observer), 2000 ); 
    // setTimeout(() => this.newObservable.subscribe(this.observer), 4000 ); 
    // setTimeout(() => this.newObservable.subscribe(this.observer), 6000 ); 
  }
}
