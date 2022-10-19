import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(private service:AppService) { }
  onFileChange(event){
    console.log(event.target.files);
    const formData = new FormData()
    
    formData.append('profilePic', event.target.files[0])
    formData.append('name', 'test')

    this.service.uploadFile(formData).subscribe(res=>{
      console.log(res);
    })
  
  }
  doctorGroup  = new FormGroup({
    name :new FormControl(''),
  })


  ngOnInit(): void {

  }

}
