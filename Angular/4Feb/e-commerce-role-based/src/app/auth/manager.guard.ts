import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate{

  constructor(private router: Router){} 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const value = localStorage.getItem('isLoggedIn');
    if(value !== 'true'){
      return false;
    }
    const role = localStorage.getItem('role');
    if(role === 'Manager' || role === 'Admin'){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}