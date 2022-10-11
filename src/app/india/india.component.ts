import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  constructor() { }

  greet : string = "Hello From India";
  message:string
  
  
  reciveData(data){

    console.log(data);
    this.message = data;
  }
  ngOnInit(): void {
  }

}
