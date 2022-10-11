import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { }

  @Input() inputFromParent: string;

  //object
  @Output() outputFromChild : EventEmitter<string> = new EventEmitter<string>();
  outputText : string = "Hello From youtube";

  sendDataToParent(){
    this.outputFromChild.emit(this.outputText);
  }
  ngOnInit(): void {
  }

}
