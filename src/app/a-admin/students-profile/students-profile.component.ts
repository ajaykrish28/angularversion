import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  students:any;
  studentId:any;
  constructor( private service:HttpDbService,private fb:FormBuilder,private http:HttpClient) {
    this.service.studentProfile().subscribe((data: any)=>{
      this.userdata=data;
    })
    this.service. getaddroom().subscribe((data: any)=>{
      this.room=data;
    })
this.http.get("http://localhost:3000/Studentdata").subscribe((data: any)=>{
  this.students=data;
})

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
  regNo:[,Validators.required],

})

deleteData(){
  this.students.forEach((element:any) => {
if(element.regNo== this.newstudent.controls["regNo"].value){

  this.studentId=element.id;
}
  });
  return this.service.deleteStudent(this.studentId).subscribe((data)=>{
    alert("sucessfully deleted");
    window.location.reload();
  })


}

updateStudentData(){
  // return this.service. studentUpdate(this.newstudent.value).subscribe((data)=>
  // alert("sucessfully update")
  // )

}

  ngOnInit() {
  }
  studentinfo(){
    alert("sucessfully added");
    return this.service.addstudent(this.newstudent.value).subscribe((data)=>
    alert("sucessfully added")
    )
  }

}
