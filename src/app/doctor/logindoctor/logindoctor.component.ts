import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logindoctor',
  templateUrl: './logindoctor.component.html',
  styleUrls: ['./logindoctor.component.css']
})
export class LogindoctorComponent implements OnInit {

  constructor() { }

  id:any;
  token:any;
  store(){

    //id,token
    localStorage.setItem("id", "1");
    sessionStorage.setItem("token", "1234567890");
  }
  get(){
    this.id = localStorage.getItem("id");
    this.token = sessionStorage.getItem("token");
  }
  remove(){
    localStorage.removeItem("id");
    sessionStorage.removeItem("token");
  }
  ngOnInit(): void {
  }

}
