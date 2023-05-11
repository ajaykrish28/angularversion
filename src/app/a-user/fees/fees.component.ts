import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  constructor() { }
  // const modal = document.querySelector('#modal');
  //  const openModal = document.querySelector('#menu_show');
  //  const closeModal = document.querySelector('#close_show');
  //  openModal.addEventListener('click', () => {
  //
  //  });

  //  closeModal.addEventListener('click', () => {
  //     modal.close();
  //  })
  menu_show(){
    const modal:any = document.querySelector('#modal');
    const openModal:any = document.querySelector('#menu_show');
    const closeModal:any = document.querySelector('#close_show');
    modal.showModal();

  }
  close_show(){   const modal:any = document.querySelector('#modal');
  const openModal:any = document.querySelector('#menu_show');
  const closeModal:any = document.querySelector('#close_show');
  modal.close();

  }

  ngOnInit() {
  }

}
