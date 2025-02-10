import { AfterViewInit, Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'debouncing-demo';

  constructor(){
    fromEvent(window, 'scroll')
      .pipe(throttleTime(2000))
      .subscribe(()=> console.log('User is Scrolling . . .'));
  }

  ngAfterViewInit(): void {
    
    const searchInput = document.getElementById('search');
    if(searchInput){
      fromEvent(searchInput, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => console.log('Searching for:', value));
    }
    else {
      console.error('Search input not found in DOM');
      
    }

    const button = document.getElementById('clickButton');
    if(button){
      fromEvent(button, 'click')
      .pipe(
        throttleTime(2000))
        .subscribe(() => console.log('Button Clicked'));
    }
    else{
      console.error('Button element not found');
      
    }

  }
}
