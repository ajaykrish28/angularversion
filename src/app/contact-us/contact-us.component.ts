import { Component, OnInit } from '@angular/core';
import { HttpDbService } from '../httpDb.service';
import { FormBuilder } from '@angular/forms';
import {  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor( private service: HttpDbService,
    private fb: FormBuilder, private HttpServes:HttpClient) { }

    newstudent = this.fb.group({
      name: [, Validators.required],


      Email: [, Validators.required],

      textArea: [, Validators.required]
    });
    contactInfo(){
      this. service.contactinfo(this.newstudent.value)
      .subscribe((data) => alert('sucessfully added'));

  }
  ngOnInit() {
  }

    }



