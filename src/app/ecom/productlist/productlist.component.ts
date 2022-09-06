import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  //activatedRoute
  constructor(private routes:ActivatedRoute) { }
  id:number=0;
  ngOnInit(): void {

    console.log("routes",this.routes);
    this.id=this.routes.snapshot.params['id'];
    alert(this.id);

  }

}
