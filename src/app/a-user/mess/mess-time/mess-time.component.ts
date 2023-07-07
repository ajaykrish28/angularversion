import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-mess-time',
  templateUrl: './mess-time.component.html',
  styleUrls: ['./mess-time.component.css']
})
export class MessTimeComponent implements OnInit {

  constructor( private route: Router) { }
  allowAcces():boolean{
    if(sessionStorage.getItem('login')== 'true'||sessionStorage.getItem('login')!=null){
      return true;
    }
    else{
      return false;
    }
    }

  ngOnInit() {
    this.empty();
  }
  empty(){
    if(!this.allowAcces()){
      this.route.navigate(['/login']);
    }
  }
}
