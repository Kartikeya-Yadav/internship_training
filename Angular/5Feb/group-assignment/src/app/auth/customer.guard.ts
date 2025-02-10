import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CustomerGuard implements CanActivate{

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const value = localStorage.getItem('isLoggedIn');
    if(value !== 'true'){
      this.router.navigate(['./user/login']);
      return false;
    }

    const role = localStorage.getItem('role');
    if(role === 'Customer' || role === 'Admin'){
      return true;
    }
    this.router.navigate(['./user/login']);
    return false;
  }
  
}
