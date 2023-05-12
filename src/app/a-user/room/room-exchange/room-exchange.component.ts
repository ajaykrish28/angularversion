import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-room-exchange',
  templateUrl: './room-exchange.component.html',
  styleUrls: ['./room-exchange.component.css']
})
export class RoomExchangeComponent implements OnInit {

  constructor( private service:HttpDbService,private fb:FormBuilder) { }

  ExchangeForm= this.fb.group({
    namevalue:[,Validators.required],
    emailvalue:[,Validators.required],
    mobilevalue:[,Validators.required],
    feesStatus:[,Validators.required],
    Reason:[,Validators.required],


})
name:any;
mail:any;
mobil:any;
descrip:any;
exchange(){
  return this.service.addstudent(this.ExchangeForm.value).subscribe((data)=>
  alert("sucessfully added")
  )
}

  ngOnInit() {
  }
}
