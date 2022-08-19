import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  data(name){

    alert(name);
  }

  employee:any = {
    name:"Ram",
    age:25,
    salary:25000,
    gender:"Male",
    isActive:false
  }
  employees:any =[
    {
      name:"Ajay",
      gender:"Male",
      city:"Mumbai",
      isActive:false
    },
    {
      name:"Mark",
      gender:"Male",
      city:"Ny",
      isActive:true
    },
    {
      name:"chole",
      gender:"Female",
      city:"LA",
      isActive:true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
