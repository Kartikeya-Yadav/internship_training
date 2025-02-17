import { Injectable } from '@angular/core';
import { CanActivate, Router,CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true'){
      return true;
    }

    alert('You Have to logIn first. . .');
    return false;
 };


// export class AuthGuard implements CanActivate{

//   constructor(private router: Router){}

//   canActivate(): boolean{
//     const isLoggedIn = localStorage.getItem('isLoggedIn')
//     if (isLoggedIn === 'true'){
//       return true;
//     }

//     alert('You Have to logIn first. . .');
//     // this.router.navigate(['/login']);
//     return false;
//   }
// }