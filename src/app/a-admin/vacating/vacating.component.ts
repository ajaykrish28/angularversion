import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SideBarComponent } from 'src/app/SideBar/SideBar.component';
import { HttpDbService } from 'src/app/httpDb.service';import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-vacating',
  templateUrl: './vacating.component.html',
  styleUrls: ['./vacating.component.css'],
})
export class VacatingComponent implements OnInit {
  feesstatus: any;
  Uservacate: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpDbService,
    private httpServer: HttpClient,
    private route: Router
  ) {
    this.http.vacateRoomUser().subscribe((data: any) => {
      this.feesstatus = data;
      console.log(this.feesstatus);
    });
  }

  viewbtn() {
    let viewbtn: any = document.querySelector('#viewbtn');
    let table_view: any = document.querySelector('.table_view');
    table_view.classList.toggle('show_view');
  }
  update_btn() {
    let update_btn: any = document.querySelector('#update_btn');
    let table_updates: any = document.querySelector('.fees_container');
    table_updates.classList.toggle('show_update');
  }

  // deleteDat(id: any) {
  //   console.log(id);
  //   this.http.deletevacateUser(id).subscribe((data) => {
  //     alert('sucessfully deleted');
  //     window.location.reload();
  //   });
  // }
  acceptData(data: any) {
    console.log(data);

    this.http.addVacatingAccpt(data).subscribe((data) => {
      alert('sucessfully added');

      this.ngOnInit();
      this.delete(data);
    });
  }
  delete(data: any) {
    this.httpServer
      .delete('http://localhost:3000/room_vacate/' + data.id)
      .subscribe(() => {
        alert('deleted sucess');
      });
  }

  deleteData(data1: any) {
    console.log(data1);
 console.log("hiii");
    this.http.VactedReject(data1).subscribe((data) => {
      alert('sucessfully added');


     this.ngOnInit();
      this.delete(data);
    });
  }
  allowAcces():boolean{
    if(sessionStorage.getItem('Adminlogin')== 'true'||sessionStorage.getItem('Adminlogin')!=null){
      return true;
    }
    else{
      return false;
    }
    }

  vacate: any;

  ngOnInit() {
  }
}
