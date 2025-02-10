import { Component } from '@angular/core';
import { Subject, of, map, range } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: false,
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  subject = new Subject<number>();

  constructor() {

    // // suject
    // this.subject.subscribe((value:number) =>console.log(value));
    // this.subject.subscribe((value:number) =>console.log(value));

    // this.subject.next(1);
    // this.subject.next(2);

    // this.subject.subscribe((value:number) =>console.log(value));
  }

}
