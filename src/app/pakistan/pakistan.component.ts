import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pakistan',
  templateUrl: './pakistan.component.html',
  styleUrls: ['./pakistan.component.css']
})
export class PakistanComponent implements OnInit {

  constructor() { }

  @Input() greet:string
  @Output() outputFromChild : EventEmitter<string> = new EventEmitter<string>();
  greetFrompak : string = "pranam to papa";

  sendDataToParent(){
    console.log("send data to parent");
    this.outputFromChild.emit(this.greetFrompak);
  }

  ngOnInit(): void {
  }

}
