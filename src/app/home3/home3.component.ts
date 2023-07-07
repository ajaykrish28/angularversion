import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() {
    this.time();
   }
  butn(){
    const butn:any=document.querySelector('.butn');
    const para:any=document.querySelector('.para');
    para.classList.toggle('show-more');
    if(butn.innerText==='More About'){
        butn.innerText="Read Less";
    }
    else{
        butn.innerText="More About";
    }
}

//
// closepopup(){
//   clearInterval(this.intervel);
//   this.popup=false;
// }

// intervel:any=setInterval(()=>{
//   this.closepopup();

// },15000)
hours:string="";
minutes:string="";
seconds:string="";
months:string="";
years:string="";
todayDate:string="";
ampm:string="";

popup:boolean=false;
time(){
  setInterval(()=>{
    var date= new Date();
    var hour= date.getHours();
    var minute= date.getMinutes();
    var sec =date.getSeconds;

    var year = date.getFullYear();
    var today= date.getDate();
    var month = date.getMonth()+1;
    var AP= '';
    if(hour>=12){
      AP ='pm';
    }
    else{
      AP='am';
    }
    if(hour>12){
      hour =hour-12;
    }
    this.hours=''+hour+'';
    this.minutes=''+minute+'';
    this.seconds=''+sec+'';
    this.months=''+month+'';
    this.years=''+year +'';
    this.ampm=''+AP+'';
    this.todayDate=''+today+'';
    this.openPopUp();


  },1000);

}
openPopUp(){
  if(this.hours=='9'&& this.minutes>='10'&&this.minutes<='11'&&this.years=='2023'&&this.months=='6'&&this.todayDate=='21'){
    this.popup=true;
  }
  if(this.hours=='8'&& this.minutes>='12'&&this.years=='2023'&&this.months=='6'&&this.todayDate=='21'){
    this.popup=false;
  }
}
closepopup(){
  this.popup=false;
}

  ngOnInit() {
  }  }


