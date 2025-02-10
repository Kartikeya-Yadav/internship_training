import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: false,
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent {
  
  replaySubject = new ReplaySubject<number>(2);

  constructor(){
    // this.replaySubject.subscribe((value: number) => console.log('Ob: 1', value));
    // this.replaySubject.subscribe((value: number) => console.log('Ob: 2', value));
    // this.replaySubject.subscribe((value: number) => console.log('Ob: 3', value));

    // this.replaySubject.next(111);
    // this.replaySubject.next(112);
    // this.replaySubject.next(113);
    // this.replaySubject.next(114);
    // this.replaySubject.next(115);

    // this.replaySubject.subscribe((value: number) => console.log('Ob: 4', value));


  }
}
