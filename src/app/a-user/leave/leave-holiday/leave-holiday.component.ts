import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-leave-holiday',
  templateUrl: './leave-holiday.component.html',
  styleUrls: ['./leave-holiday.component.css']
})
export class LeaveHolidayComponent implements OnInit {

 holiday: any;
  constructor( private service:HttpDbService,private fb:FormBuilder, private route: Router)  {
    this.service.  getTime().subscribe((data: any)=>{
      this.holiday=data;
    }  )
  }
  allowAcces():boolean{
    if(sessionStorage.getItem('login')== 'true'||sessionStorage.getItem('login')!=null){
      return true;
    }
    else{
      return false;
    }
    }


  ngOnInit() {this.empty();

  }
  empty(){
    if(!this.allowAcces()){
      this.route.navigate(['/login']);
    }
  }
}
