import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-admin_room',
  templateUrl: './admin_room.component.html',
  styleUrls: ['./admin_room.component.css']
})
export class Admin_roomComponent implements OnInit {
  userdata: any;
  roomdata: any;

  constructor( private fb:FormBuilder,private service:HttpDbService) {
    this.service. getaddroom().subscribe((data: any)=>{
      this.userdata=data;
    }

    )
    this.service. getroomInfo().subscribe((data:any)=>
    {
      this.roomdata=data;
    })
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
    return this.service.roomInfo(this.removeroom.value).subscribe(data=>{
      alert("sumbit");

  })}

  ngOnInit() {
  }

}
