import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }

  getMassage(){
    return 'WelCome to the my first angular app. . .';
  }
}
