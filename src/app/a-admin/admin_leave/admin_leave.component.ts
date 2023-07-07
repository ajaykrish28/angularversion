 import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-admin_leave',
  templateUrl: './admin_leave.component.html',
  styleUrls: ['./admin_leave.component.css']
})
export class Admin_leaveComponent implements OnInit {
  feesstatus: any;

  constructor(private fb:FormBuilder,private http:HttpDbService,private route: Router) {
    this.http. getattendanceinfo().subscribe((data:any)=>{
       this.feesstatus=data;

    }

    )
  }


  viewbtn(){
    let viewbtn:any = document.querySelector("#viewbtn");
    let table_view:any= document.querySelector(".table_view");
    table_view.classList.toggle("show_view");


  }
  update_btn(){

    let update_btn:any = document.querySelector("#update_btn");
    let table_updates:any= document.querySelector(".fees_container");
    table_updates.classList.toggle("show_update");


  }
  feesgrp=this.fb.group({
    Name:[,Validators.required],

    mobile:[,Validators.required],

    status:[,Validators.required],
    roomno:[,Validators.required]

  })


  attendance(){
    return this.http.attendanceinfo(this.feesgrp.value).subscribe(data=>{
      alert("sumbit");
      console.log("hooo");
    })


  }
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
  }

}
