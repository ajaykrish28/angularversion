import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {

  constructor( private service:HttpDbService,private fb:FormBuilder, private route: Router) { }
  ExchangeForm= this.fb.group({
    namevalue:[,Validators.required],

    mobilevalue:[,Validators.required],
    Subject:[,Validators.required],
    Reason:[,Validators.required],
    RoomNo:[,Validators.required],


})
mess(){
  this.service. updatemessQy(this.ExchangeForm.value).subscribe((data)=>  alert('sucessfully added'));

}
allowAcces():boolean{
  if(sessionStorage.getItem('login')== 'true'||sessionStorage.getItem('login')!=null){
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
