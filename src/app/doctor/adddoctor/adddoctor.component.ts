import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  constructor(private service:AppService) { }

  addDoctor (){

    let doc = {
      dName:"ajay",
      dExp:25,
      dAge:50,
      dEmail:"ajay@gmail.com"
    }

    this.service.addDoctor(doc).subscribe(res=>{
      console.log(res);
    })

  }

  ngOnInit() {
  }

}
