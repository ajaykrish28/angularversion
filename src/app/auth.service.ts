import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   userlogin=false;
//   isUserLogIn=Boolean(sessionStorage.getItem("userSuccess"));

//   constructor() { }
//   get isUserLoggedIn(){
//     return false;
//   }
//   get isUserRole(){
//     return false;
//   }

// isLoggedIn=false;
// login(){
//  this.isLoggedIn=true;
//  this.isUserLogIn= Boolean(sessionStorage.getItem("userSuccess"));
// }
// logout(){
//   this.isLoggedIn=false;
//   this.isUserLogIn= Boolean(sessionStorage.getItem("userSuccess"));
//  }
isUserLoggedIn:boolean = true;
  userName:any;
  password:any;
  userLogin(username:any, password:any) {
    this.userName = username;
    this.password = password;
    this.isUserLoggedIn = false;
    return of(this.isUserLoggedIn);
  }

  isUserLogin():boolean {
    return this.isUserLoggedIn;
  }

  logoutUser():any {
    this.isUserLoggedIn = true;
  }
  isAdminLoggedIn:boolean = true;
  adminLogin() {
    // this.userName = username;
    // this.password = password;
    this.isAdminLoggedIn = true;
    return of(this.isAdminLoggedIn);
  }

isLoggedIn=false;
login(){
 this.isLoggedIn=true;
 this.isUserLogIn= Boolean(sessionStorage.getItem("userSuccess"));
}
logout(){
  this.isLoggedIn=false;
  this.isUserLogIn= Boolean(sessionStorage.getItem("userSuccess"));
 }

}
