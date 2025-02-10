import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate{

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const value = localStorage.getItem('isLoggedIn');
    if(value !== 'true'){
      return false;
    }

    const role = localStorage.getItem('role');
    if(role === 'Admin'){
      return true;
    }
    console.log("you do not have admin acsess . . .");
    
    this.router.navigate(['/']);
    return false;
  }
}
