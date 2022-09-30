import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';



@Component({
  selector: 'app-employeechart',
  templateUrl: './employeechart.component.html',
  styleUrls: ['./employeechart.component.css']
})
export class EmployeechartComponent implements OnInit {
  data:any;
  tutorials:any;
  chartOptions:any
  subscription: Subscription
  fees:number[]= [];
  

  
  constructor(private service:AppService) { 

    this.service.getAllTutorial().subscribe(res=>{
      this.fees = res.map(res=>res.fees);
      console.log(this.fees)
    })
  }

  
  ngOnInit() {

   
  console.log(this.tutorials)

    this.data = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [this.fees],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
  }

}
