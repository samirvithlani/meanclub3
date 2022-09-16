import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) { }
  canActivate():boolean{ 
    if(sessionStorage.getItem('token')===null){
      this.router.navigateByUrl('/logindoctor');
      
    }
    
    return true;
  }
  
}
