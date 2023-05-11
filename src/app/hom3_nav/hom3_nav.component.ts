import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hom3_nav',
  templateUrl: './hom3_nav.component.html',
  styleUrls: ['./hom3_nav.component.css']
})
export class Hom3_navComponent implements OnInit {


  contactModal(){
    const modal:any = document.querySelector("#modal");
    modal.showModal();
 }

 closeModal(){
    const modal:any = document.querySelector("#modal");
    modal.close();
 }

 constructor(private fb:FormBuilder) { }
 LoginForm=this.fb.group({
   namevalue:[,Validators .required],
   emailvalue:[,Validators .required],
   mobilevalue:[,Validators .required],
   passwordvalue:[,Validators .required],
   confirmpasswordvalue:[,Validators .required],



},
// {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
)
  ngOnInit() {
  }

}
