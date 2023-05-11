import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {

  constructor() { }
   // script for sorting
  //  const menumonday:any = document.getElementById('MondayMenu');
  //   const menutuesday:any = document.getElementById('tuesdayMenu');
  //  let menuwenesday = document.getElementById('wednesdayMenu');
  //  let menuthursday = document.getElementById('thursdayMenu');
  //  let menufriday = document.getElementById('fridayMenu');
  //  let menusaturday = document.getElementById('saturdayMenu');
  //  let menusunday = document.getElementById('sundayMenu');

  //  let mondayopn = document.getElementById('monday');
  //  let tuesdayopn = document.getElementById('tuesday');
  //  let wednesdayopn = document.getElementById('wednesday');
  //  let thursdayopn = document.getElementById('thursday');
  //  let fridayopn = document.getElementById('friday');
  //  let saturdayopn = document.getElementById('saturday');
  //  let sundayopn = document.getElementById('sunday');

  //  window.addEventListener('load', function () {
  //      menumonday.style.display = 'grid';
  //      menutuesday.style.display = 'none';
  //      menuwenesday.style.display = 'none';
  //      menuthursday.style.display = 'none';
  //      menufriday.style.display = 'none';
  //      menusaturday.style.display = 'none';
  //      menusunday.style.display = 'none';
  //      mondayopn.style.color = "red";
  //  })

  //  mondayopn.addEventListener('click', () => {
  //      menumonday.style.display = 'grid';
  //      menutuesday.style.display = 'none';
  //      menuwenesday.style.display = 'none';
  //      menuthursday.style.display = 'none';
  //      menufriday.style.display = 'none';
  //      menusaturday.style.display = 'none';
  //      menusunday.style.display = 'none';
  //      // script for color
  //      mondayopn.style.color = "red";
  //      tuesdayopn.style.color = "black";
  //      wednesdayopn.style.color = "black";
  //      thursdayopn.style.color = "black";
  //      fridayopn.style.color = "black";
  //      saturdayopn.style.color = "black";
  //      sundayopn.style.color = "black";
  //  });

  //  wednesdayopn.addEventListener('click', () => {
  //      menumonday.style.display = 'none';
  //      menutuesday.style.display = 'none';
  //      menuwenesday.style.display = 'grid';
  //      menuthursday.style.display = 'none';
  //      menufriday.style.display = 'none';
  //      menusaturday.style.display = 'none';
  //      menusunday.style.display = 'none';
  //      // script for color
  //      mondayopn.style.color = "black";
  //      tuesdayopn.style.color = "black";
  //      wednesdayopn.style.color = "red";
  //      thursdayopn.style.color = "black";
  //      fridayopn.style.color = "black";
  //      saturdayopn.style.color = "black";
  //      sundayopn.style.color = "black";
  //  });
  //  thursdayopn.addEventListener('click', () => {
  //      menutuesday.style.display = 'none';
  //      menuwenesday.style.display = 'none';
  //      menumonday.style.display = 'none';
  //      menufriday.style.display = 'none';
  //      menusaturday.style.display = 'none';
  //      menusunday.style.display = 'none';
  //      menuthursday.style.display = 'grid';

  //      // script for color
  //      mondayopn.style.color = "black";
  //      tuesdayopn.style.color = "black";
  //      wednesdayopn.style.color = "black";
  //      thursdayopn.style.color = "red";
  //      fridayopn.style.color = "black";
  //      saturdayopn.style.color = "black";
  //      sundayopn.style.color = "black";
  //  });
  //  fridayopn.addEventListener('click', () => {
  //      menutuesday.style.display = 'none';
  //      menuwenesday.style.display = 'none';
  //      menuthursday.style.display = 'none';
  //      menumonday.style.display = 'none';
  //      menusaturday.style.display = 'none';
  //      menusunday.style.display = 'none';
  //      menufriday.style.display = 'grid';

  //      // script for color
  //      mondayopn.style.color = "black";
  //      tuesdayopn.style.color = "black";
  //      wednesdayopn.style.color = "black";
  //      thursdayopn.style.color = "black";
  //      fridayopn.style.color = "red";
  //      saturdayopn.style.color = "black";
  //      sundayopn.style.color = "black";
  //  });
  //  saturdayopn.addEventListener('click', () => {
  //      menutuesday.style.display = 'none';
  //      menuwenesday.style.display = 'none';
  //      menuthursday.style.display = 'none';
  //      menufriday.style.display = 'none';
  //      menumonday.style.display = 'none';
  //      menusunday.style.display = 'none';
  //      menusaturday.style.display = 'grid';

  //      // script for color
  //      mondayopn.style.color = "black";
  //      tuesdayopn.style.color = "black";
  //      wednesdayopn.style.color = "black";
  //      thursdayopn.style.color = "black";
  //      fridayopn.style.color = "black";
  //      saturdayopn.style.color = "red";
  //      sundayopn.style.color = "black";
  //  });
  //  sundayopn.addEventListener('click', () => {
  //      menutuesday.style.display = 'none';
  //      menuwenesday.style.display = 'none';
  //      menuthursday.style.display = 'none';
  //      menufriday.style.display = 'none';
  //      menusaturday.style.display = 'none';
  //      menumonday.style.display = 'none';
  //      menusunday.style.display = 'grid';

  //      // script for color
  //      mondayopn.style.color = "black";
  //      tuesdayopn.style.color = "black";
  //      wednesdayopn.style.color = "black";
  //      thursdayopn.style.color = "black";
  //      fridayopn.style.color = "black";
  //      saturdayopn.style.color = "black";
  //      sundayopn.style.color = "red";
  //  });
  //  tuesdayopn.addEventListener('click', () => {
  //      menutuesday.style.display = 'grid';
  //      menuwenesday.style.display = 'none';
  //      menuthursday.style.display = 'none';
  //      menufriday.style.display = 'none';
  //      menusaturday.style.display = 'none';
  //      menumonday.style.display = 'none';
  //      menusunday.style.display = 'none';



  //      // script for color
  //      mondayopn.style.color = "black";
  //      tuesdayopn.style.color = "red";
  //      wednesdayopn.style.color = "black";
  //      thursdayopn.style.color = "black";
  //      fridayopn.style.color = "black";
  //      saturdayopn.style.color = "black";
  //      sundayopn.style.color = "black";
  //  });


  ngOnInit() {
  }

}
