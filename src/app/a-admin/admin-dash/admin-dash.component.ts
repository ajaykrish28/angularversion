import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor(private route: Router) { }
  allowAcces():boolean{
    if(sessionStorage.getItem('Adminlogin')== 'true'||sessionStorage.getItem('Adminlogin')!=null){
      return true;
    }
    else{
      return false;
    }
    }
  empty(){
    if(!this.allowAcces()){
      this.route.navigate(['/login']);
    }
  }
  ngOnInit() {
    // this.empty();
  }

}
