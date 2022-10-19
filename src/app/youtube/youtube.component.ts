import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
      console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes);
  }

  @Input() inputFromParent: string;

  //object
  @Output() outputFromChild : EventEmitter<string> = new EventEmitter<string>();
  outputText : string = "Hello From youtube";

  sendDataToParent(){
    this.outputFromChild.emit(this.outputText);
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
