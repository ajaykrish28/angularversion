import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-students-profile',
  templateUrl: './students-profile.component.html',
  styleUrls: ['./students-profile.component.css']
})
export class StudentsProfileComponent implements OnInit {
  userdata: any;
  room: any;

  constructor( private service:HttpDbService,private fb:FormBuilder) {
    this.service.studentProfile().subscribe((data: any)=>{
      this.userdata=data;
    })
    this.service. getaddroom().subscribe((data: any)=>{
      this.room=data;
    }

    )
  }



//   viewbtn.onclick = function () {
//
//  }




//   update_btn.onclick = function () {
//

//  }
show_view(){
    let viewbtn:any = document.querySelector("#viewbtn");
  let table_view:any= document.querySelector(".table_view");
  table_view.classList.toggle("show_view");

}
show_update(){
    let update_btn:any = document.querySelector("#update_btn");
  let table_updates:any= document.querySelector(".table_updates");
  table_updates.classList.toggle("show_update");

}
newstudent= this.fb.group({
  name:[,Validators.required],
  mobile:[,Validators.required],
  age:[,Validators.required],
  Fathername:[,Validators.required],
  mothername:[,Validators.required],
  Email:[,Validators.required],
  permentaddress:[,Validators.required],
  collegename:[,Validators.required],
  Adharnumber:[,Validators.required],
  roomnumber:[,Validators.required],


})
addstudentinfo(){
  return this.service.addstudent(this.newstudent.value).subscribe((data)=>
  alert("sucessfully added")
  )
}

  ngOnInit() {
  }

}
