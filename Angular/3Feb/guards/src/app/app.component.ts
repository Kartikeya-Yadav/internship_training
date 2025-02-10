import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guards';

  constructor(private router: Router){
    localStorage.setItem('isLogedIn', 'false');

    this.router.events.subscribe((event)=> {
      if(event instanceof NavigationStart){
        console.log(`Navigation Start: ${event}`);
      }
      if(event instanceof NavigationEnd){
        console.log(`Navigation End: ${event}`);
      }
      if(event instanceof NavigationCancel){
        console.log(`Navigation Cancel: ${event}`);
      }
      if(event instanceof ResolveStart){
        console.log(`Resolve Start: ${event}`);
      }
      if(event instanceof ResolveEnd){
        console.log(`Resolve End: ${event}`);
      }
    });
  }
  
}
