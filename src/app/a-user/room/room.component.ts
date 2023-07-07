import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor( private service:HttpDbService,private fb:FormBuilder, private route: Router) { }


  ExchangeForm= this.fb.group({
    namevalue:[,Validators.required],

    mobilevalue:[,Validators.required],
    Subject:[,Validators.required],
    Reason:[,Validators.required],
    RoomNo:[,Validators.required],


})
room(){
  this.service.updateRoomQy(this.ExchangeForm.value) .subscribe((data) => alert('sucessfully added'));

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
