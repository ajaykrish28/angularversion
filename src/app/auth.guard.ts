import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private authService:AuthService,private route:Router){}
  canActivate(){
    if(sessionStorage.getItem("usersuccess")){
      return true;
    }
    else{
      window.alert("please log-in");
      this.route.navigate(['/login'])
      return false;

    }


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //     if(this.authService.isUserLogin()) {
  //       alert("You are not login to view this page !!");
  //       this.route.navigate(['login'], {queryParams: {retUrl:route.url}});
  //       return false;
  //     } else {
  //       return true;
  //     }

  // }

  }


}
