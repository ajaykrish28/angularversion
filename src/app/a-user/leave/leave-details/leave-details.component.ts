import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {
  attenance: any;
    emailId:any=sessionStorage.getItem('emailDetails');
  constructor( private service:HttpDbService,private fb:FormBuilder, private route: Router)  {
    this.service.getattendanceinfo().subscribe((data: any)=>{
      this.attenance=data;
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


  id:any;
  userdata:any='';
  Name:any;
  Register:any;
  status:any;
  email:any;
  phone:any;
  Father:any;
  Mother:any;
  Address:any;
  college:any;
  Adharnumber:any;
  Room:any;
  date:any;
 ngOnInit() {
    this.service.getattendanceinfo().subscribe((data)=>{
      this.userdata=data;
      for(var i=0;i<this.userdata.length;i++){
        if(this.emailId==this.userdata[i].Email){
          console.log(this.emailId)
          this.id=i;
        }
      }
      this.Register=this.userdata[this.id].id;
      this.Name=this.userdata[this.id].Name;
      this. phone=this.userdata[this.id].phone;
      this.date=this.userdata[this.id].date;
      this.status=this.userdata[this.id].status;
      this.email=this.userdata[this.id].Email;
      this.Room=this.userdata[this.id].roomno;

      // this.Address=this.userdata[this.id].permentaddress;
      // this.college=this.userdata[this.id].collegename;
      // this. Adharnumber=this.userdata[this.id].Adharnumber;

      // this.Register=this.userdata[this.id].regNo;
  })
  this.empty();

}
empty(){
  if(!this.allowAcces()){
    this.route.navigate(['/login']);
  }
}

}
