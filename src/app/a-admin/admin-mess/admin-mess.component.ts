import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SideBarComponent } from 'src/app/SideBar/SideBar.component';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-mess',
  templateUrl: './admin-mess.component.html',
  styleUrls: ['./admin-mess.component.css']
})
export class AdminMessComponent implements OnInit {

  meessReview: any;

  constructor(private fb:FormBuilder,private http:HttpDbService,private httpServer:HttpClient,private route: Router) {
    this.http.getmessQy().subscribe((data:any)=>{
       this.meessReview=data;

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
  MessMenu=this.fb.group({
    mrg:[,Validators.required],
    mrg2:[,Validators.required],
    afternoon:[,Validators.required],
    afternoon2:[,Validators.required],
 evening:[,Validators.required],
 evening2:[,Validators.required],
   night:[,Validators.required],
   night2:[,Validators.required]

  })


  feesform(){
    return this.http. messinfo(this.MessMenu.value).subscribe(data=>{
      alert("Mess added");
    })


  }

  deletedata(data:any){
    alert(data)
    this.httpServer.delete(" http://localhost:3000/MessQy/"+data).subscribe(()=>{
      alert("deleted sucess")
      window.location.reload();
    })

  }

  ngOnInit() {

    this.empty();
  }
}
