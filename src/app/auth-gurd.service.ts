import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGurdService implements CanActivate{
  constructor(public auth: AuthService, public router: Router) {}  canActivate(): boolean {
   let response:boolean;
  if (this.auth.isUserLoggedIn()===true && sessionStorage.getItem('authority')==="ADMIN") {
    
    response=true;
  }else{
    //response=false
    response=true
  }
    return response;
  }
  

}
