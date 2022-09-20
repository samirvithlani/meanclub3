import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {

  

  constructor(private routes:ActivatedRoute,private service:AppService,private router:Router,private toastr:ToastrService,private messageService:MessageService) { }

  updateDoctor(){
    
    this.service.updateDoctor(this.id,this.doctorGroup.value).subscribe(res=>{
      
      
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Doctor Updated Successfully'});
      
      
      //this.router.navigateByUrl('/listdoctor');
      //this.toastr.success('Doctor Updated Successfully');
      //this.router.navigate(['listdoctor']);
     
    })
  }

  id:number=0;
  doctor:any;
  doctorGroup  = new FormGroup({
    dName :new FormControl(''),
    dExp: new FormControl(''),
  })

  ngOnInit(): void {
    this.id = this.routes.snapshot.params.id;
    //
    
    this.service.getDoctorById(this.id).subscribe(res=>{

        this.doctor  = res
    })
  }

}
