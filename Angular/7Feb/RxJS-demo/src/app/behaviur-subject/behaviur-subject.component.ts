import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviur-subject',
  standalone: false,
  templateUrl: './behaviur-subject.component.html',
  styleUrl: './behaviur-subject.component.css'
})
export class BehaviurSubjectComponent {

  behaviurSubject = new BehaviorSubject<number>(0);

  constructor() {
    //behaviurSubject
    // this.behaviurSubject.subscribe((value: number) => console.log(value));
    // this.behaviurSubject.subscribe((value: number) => console.log(value));

    // this.behaviurSubject.next(3);
    // this.behaviurSubject.next(4);

    // this.behaviurSubject.subscribe((value: number) => console.log(value));
  }
}
