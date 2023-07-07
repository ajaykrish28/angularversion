import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin_room',
  templateUrl: './admin_room.component.html',
  styleUrls: ['./admin_room.component.css']
})
export class Admin_roomComponent implements OnInit {
  userdata: any;
  roomdata: any;
  RoomId: any;

  constructor( private fb:FormBuilder,private service:HttpDbService,private httpServer:HttpClient,private route: Router) {

  }
  show_view(){
    let viewbtn:any = document.querySelector("#viewbtn");
    let table_view:any= document.querySelector(".table_view");
    table_view.classList.toggle("show_view");

  }
  show_quries(){
    let update_btn:any = document.querySelector("#update_btn");
    let table_updates:any= document.querySelector(".table_updates");
    table_updates.classList.toggle("show_update");}

    addRoom=this.fb.group({

      RoomNo:[,Validators.required],

    })
    removeroom=this.fb.group({
      RoomNo:[,Validators.required],
      RoomStatus:[,Validators.required],
    })
  addroominfo(){
return this.service.addroom(this.addRoom.value).subscribe(data=>{
  alert("sumbit");
})
  }
  roominfo(){
    alert( "add");
    return this.service.roomInfo(this.removeroom.value).subscribe(data=>{
      alert("sumbit");

  })}


  deleteData(){
    alert("dlete");
    this.roomdata.forEach((element: any) => {
      if (element.RoomNo == this.removeroom.controls['RoomNo'].value) {
        this.RoomId = element.id;
      }
    });
    return this.service.deleteRoom(this.RoomId).subscribe((data) => {
      alert('sucessfully deleted');
      window.location.reload();
    });
  }

  deleteDataAvail(){
    alert("delete");
    this.userdata.forEach((element: any) => {
      if (element.RoomNo == this.addRoom.controls['RoomNo'].value) {
        this.RoomId = element.id;
      }
    });
    return this.service.deleteRoomAvail(this.RoomId).subscribe((data) => {
      alert('sucessfully deleted');
      window.location.reload();
    });
  }
  // solve(){
  //   this.messInfoData.forEach((element: any) => {
  //     if (element.RoomNo == this.removeroom.controls['RoomNo'].value) {
  //       this.RoomId = element.id;
  //     }
  //   });
  //   return this.service. deleteRoomIssue(this.RoomId).subscribe((data) => {
  //     alert('sucessfully deleted');
  //     window.location.reload();
  //   });
  // }
  deletedata(data:any){
    alert(data)
    this.httpServer.delete(" http://localhost:3000/RoomQy/"+data).subscribe(()=>{
      alert("deleted sucess")
      window.location.reload();
    })

  }
  empty(){
    if(!this.allowAcces()){
      this.route.navigate(['/login']);
    }
  } allowAcces():boolean{
    if(sessionStorage.getItem('Adminlogin')== 'true'||sessionStorage.getItem('Adminlogin')!=null){
      return true;
    }
    else{
      return false;
    }
    }
  messInfoData:any;

  ngOnInit() {

    this.service.getRoomQy().subscribe((data: any) => {
      this.messInfoData = data;
    });
    this.service. getaddroom().subscribe((data: any)=>{
      this.userdata=data;
    }

    )
    this.service. getroomInfo().subscribe((data:any)=>
    {
      this.roomdata=data;
    })
    this.empty();
  }

  }



