import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit,OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes);
  }

yt:string
  constructor() { }
  reciveDataFromChild(data){

      this.yt = data;
    console.log(data);
  }

  inputText: string = "Hello From Parent Component";
  ngOnInit(): void {
    //console.log("ngOnInit");
  }

}
