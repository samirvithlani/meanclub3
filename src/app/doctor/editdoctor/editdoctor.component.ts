import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {

  constructor(private routes:ActivatedRoute,private service:AppService) { }

  updateDoctor(){
    
  }

  id:number=0;
  doctor:any;
  doctorGroup  = new FormGroup({
    dName :new FormControl(''),
    phone: new FormControl(''),
  })

  ngOnInit(): void {
    this.id = this.routes.snapshot.params.id;
    //
    
    this.service.getDoctorById(this.id).subscribe(res=>{

        this.doctor  = res
    })
  }

}
