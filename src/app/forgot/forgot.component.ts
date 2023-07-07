import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpDbService } from '../httpDb.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(
    private fb: FormBuilder,

    private http: HttpDbService,
    private route: Router
  ) {}
  LoginForm = this.fb.group({

    emailvalue: [, Validators.required],



  });
  loginform(){
    this.http.fogotInfo(this. LoginForm.value)
      .subscribe((data) => alert('sucessfully added'));
  }

  ngOnInit() {
  }

}
