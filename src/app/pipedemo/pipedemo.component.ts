import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }
  today = new Date();
  name = "Rajesh";
  lastname = "Kumar";
  title = "hi this is angular 14";
  bal : number = 1000;
  marks = 50;
  a = 50;
  amount : number = 1000;
  ngOnInit(): void {
  }

}
