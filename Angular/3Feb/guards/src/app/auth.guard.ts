import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogedIn = localStorage.getItem('isLogedIn');
    if(isLogedIn === 'true'){
      return true;
    }
    else{
      console.log("Acccessing Dashboard without login. . . ")
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogedIn = localStorage.getItem('isLogedIn');
    const userRole = localStorage.getItem('role');
    console.log(isLogedIn, userRole);
    
    if(isLogedIn === 'true' && userRole === 'Admin'){
      return true;
    }
    else{
      return false;
    }
  }

}
