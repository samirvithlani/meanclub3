import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  constructor(private service:AppService) { }

  doctorGroup  = new FormGroup({
    dName :new FormControl('',Validators.required),
  })

  addDoctor() {
    
    console.log(this.doctorGroup)
    // this.service.addDoctor(this.doctorGroup.value).subscribe(data=>{
    //   console.log(data);
    //   alert('Doctor added successfully');
      
    // })
  }

  ngOnInit() {

  }

}
