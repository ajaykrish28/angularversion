import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {



  menu_show(){
    const modal:any = document.querySelector('#modal');
    const openModal:any = document.querySelector('#menu_show');
    const closeModal:any = document.querySelector('#close_show');
    modal.showModal();

  }
  close_show(){   const modal:any = document.querySelector('#modal');
  const openModal:any = document.querySelector('#menu_show');
  const closeModal:any = document.querySelector('#close_show');
  modal.close();

  }
  allowAcces():boolean{
    if(sessionStorage.getItem('login')== 'true'||sessionStorage.getItem('login')!=null){
      return true;
    }
    else{
      return false;
    }
    }


  attenance: any;
    emailId:any=sessionStorage.getItem('emailDetails');

  constructor( private service:HttpDbService,private fb:FormBuilder,  private route: Router)  {
    this.service.getfeesupdate().subscribe((data: any)=>{
      this.attenance=data;
    }  )
  }

  cardDetailsForm= this.fb.group({
    CardName:[,Validators.required],

    CardNo:[,Validators.required],
    CardValid:[,Validators.required],
    Cvv:[,Validators.required]


})

cardDetails(){}

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
    this.service.getfeesupdate().subscribe((data)=>{
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
      this.date=this.userdata[this.id].register;
      this.status=this.userdata[this.id].feesStatus;
      this.email=this.userdata[this.id].Email;
      this.Room=this.userdata[this.id].roomno;


  })


// this.empty();

}
empty(){
  if(!this.allowAcces()){
    this.route.navigate(['/login']);
  }
}

}

