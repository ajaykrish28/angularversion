import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-room-exchange',
  templateUrl: './room-exchange.component.html',
  styleUrls: ['./room-exchange.component.css'],
})
export class RoomExchangeComponent implements OnInit {
  emailId: any = sessionStorage.getItem('emailDetails');
  id: any;
  Register: any;
  email: any;
  vacate: any;
  RegisterVacted: any;
  data: any = '';
  VacatedEmail: any;
  Vacated_id: any;
  vacateReject: any;
  //div
  hide: boolean = false;
  //accpect
  hide1: boolean = true;
  //reject
  hide2: boolean = false;
  //pending
  hide3: boolean = false;

  constructor(private service: HttpDbService, private fb: FormBuilder, private route: Router) {}

  ExchangeForm = this.fb.group({
    namevalue: [, Validators.required],
    Status: [, Validators.required],
    mobilevalue: [, Validators.required],
    RoomNo: [, Validators.required],
    Reason: [, Validators.required],
    date: [, Validators.required],
  });
  name: any;
  mail: any;
  mobil: any;
  descrip: any;
  exchange() {
    return this.service
      .exchangeinfo(this.ExchangeForm.value)
      .subscribe((data) => {
        alert('sucessfully added');
      });
  }
  allowAcces():boolean{
    if(sessionStorage.getItem('login')== 'true'||sessionStorage.getItem('login')!=null){
      return true;
    }
    else{
      return false;
    }
    }

  status: any;
  ngOnInit() {

    this.service.vacateRoomUser().subscribe((data: any) => {
      this.status = data;
      console.log(this.status);
      //apply loop for bending list

      for (var i = 0; i < this.status.length; i++) {
        if (this.emailId == this.status[i].emailvalue) {
          this.hide = true;
          this.hide1 = false;
          this.hide2 = false;
          this.hide3 = true;
          console.log('bending');
          // this.id = i;
          // console.log(this.id + 'list');
        }
        // this.Register = this.status[this.id].id;
        // this.email = this.status[this.id].emailvalue;
        // console.log(this.email +"  " +'accp');
        else{
          console.log("nooo is ")
          }
      }


      this.service.getVactedUser().subscribe((data: any) => {
        this.vacate = data;
        console.log(this.vacate);
        for (var i = 0; i < this.vacate.length; i++) {
          if (this.emailId == this.vacate[i].emailvalue) {
            this.hide = true;
            this.hide1 = true;
            this.hide2 = false;
            this.hide3 = false;
            console.log('accpected');
          }
          else{
            console.log("nooo is ")
            }
        }

        this.service.getVactedReject().subscribe((data: any) => {
          this.vacateReject = data;
          console.log(this.vacateReject);

          for (var j = 0; j < this.vacateReject.length; j++) {
            if (this.emailId == this.vacateReject[j].emailvalue) {
              this.Vacated_id = j;
              console.log(this.Vacated_id + 'vacated');


            this.RegisterVacted = this.vacateReject[this.Vacated_id].id;
            this.VacatedEmail = this.vacateReject[this.Vacated_id].emailvalue;
            console.log(this.VacatedEmail + 'vacated');

            this.hide = true;
            this.hide1 = false;
            this.hide2 = true;
            this.hide3 = false;
            console.log('Reject');
          }
        else{
          console.log("nooo is ")
        }  }


        });
      });
    });
    this.empty(); }
    empty(){
      if(!this.allowAcces()){
        this.route.navigate(['/login']);
      }
    }
}
