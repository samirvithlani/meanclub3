import { Component, OnInit } from '@angular/core';
import { CompserviceService } from '../compservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private service:CompserviceService) {
    this.service.SharingData.subscribe((res:any)=>{
      this.comp11 = res
    })
   
   }
  comp11:string=""
  
  change1(data){
    this.service.SharingData.next(data.value)
    
  }
  ngOnInit(): void {
    
    
  }

}
