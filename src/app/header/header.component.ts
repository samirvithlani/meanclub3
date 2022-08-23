import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:AppService) { }

  data:string="";
  users:any[]=[];
  ngOnInit() {

    this.data = this.service.getHello()
    this.service.getData().subscribe(res=>{
      console.log(res.data);
      this.users = res.data;
    })
  }

}
