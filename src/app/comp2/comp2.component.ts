import { Component, OnInit } from '@angular/core';
import { CompserviceService } from '../compservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  
  constructor(private service:CompserviceService) {
    
    this.service.SharingData.subscribe((res:any)=>{
      this.comp22 = res
    })
   }
  comp22:string =""
  change2(data){
    
    this.service.SharingData.next(data.value)
    
  }

  ngOnInit(): void {
   
  }

}
