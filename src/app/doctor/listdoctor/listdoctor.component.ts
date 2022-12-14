import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listdoctor',
  templateUrl: './listdoctor.component.html',
  styleUrls: ['./listdoctor.component.css']
})
export class ListdoctorComponent implements OnInit {

  constructor(private serivce:AppService) { }

doctors:any[] = [];
loading : boolean = false;

ngOnInit() {
this.serivce.getData().subscribe(res=>{

  console.log(res);
  this.doctors = res;
  
}) 
this.loading = false;
}

deleteDoctor (dId){
this.serivce.delteDoctor(dId).subscribe(res=>{
  console.log(res);
//list api
this.ngOnInit();
  
})

}

}
