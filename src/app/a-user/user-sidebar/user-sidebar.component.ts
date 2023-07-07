import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor( private route: Router) { }
  openSideBar(){
    let  home_content:any="";
     let btn:any = document.querySelector("#btn");
  let sidebar:any = document.querySelector(".sidebar");
  let searchBtn:any = document.querySelector(".bx-search");
    sidebar.classList.toggle("active");
    home_content.classList.toggle("activehome");


  }

  failure:any=false;
  logout(){
    sessionStorage.setItem('login',this.failure);
    console.log('log out');
    this.route.navigate(['/login']);
  }
  ngOnInit() {



  }

}
