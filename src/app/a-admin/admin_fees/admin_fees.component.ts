import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-admin_fees',
  templateUrl: './admin_fees.component.html',
  styleUrls: ['./admin_fees.component.css']
})
export class Admin_feesComponent implements OnInit {
  feesstatus: any;

  constructor(private fb:FormBuilder,private http:HttpDbService , private route: Router) {
    this.http.getfeesupdate().subscribe((data:any)=>{
       this.feesstatus=data;
       console.log(this.feesstatus);
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
    Name:[,[Validators.required]],
    Email:[,[Validators.required]],
    phone:[,[Validators.required]],
    register:[,[Validators.required]],
    feesStatus:[,[Validators.required]],
    roomno:[,[Validators.required]]

  });


  feesform(){
    return this.http.feesupdate(this.feesgrp.value).subscribe(data=>{
      alert("fees added");
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


  ngOnInit() {
    this.empty();
  }
  empty(){
  if(!this.allowAcces()){
    this.route.navigate(['/login']);
  }
}

}
