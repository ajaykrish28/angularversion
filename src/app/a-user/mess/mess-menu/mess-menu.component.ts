import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-mess-menu',
  templateUrl: './mess-menu.component.html',
  styleUrls: ['./mess-menu.component.css']
})
export class MessMenuComponent implements OnInit {

  mess: any;

  constructor(private fb:FormBuilder,private http:HttpDbService, private route: Router) {
    this.http.getmessinfo().subscribe((data:any)=>{
       this.mess=data;
console.log(this.mess.mrg
  );
    }

    )
  }
  allowAcces():boolean{
    if(sessionStorage.getItem('login')== 'true'||sessionStorage.getItem('login')!=null){
      return true;
    }
    else{
      return false;
    }
    }

  value:any;
  ngOnInit() {
    this.http.getmessinfo().subscribe((data:any)=>{
      this.mess=data;})

    // for(var i=0;i<this.mess.length;i++){
    // this.value= this.mess.id;
    // console.log(this.value);
    // }
    // console.log(this.value);
    this.empty();

  }
  empty(){
    if(!this.allowAcces()){
      this.route.navigate(['/login']);
    }
  }

}
