import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor(private authservice: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
     return this.authservice.authentication();
  }
}
