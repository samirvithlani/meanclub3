import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './ecom/cart/cart.component';
import { DashboarComponent } from './ecom/dashboar/dashboar.component';
import { NavbarComponent } from './ecom/navbar/navbar.component';
import { ProductComponent } from './ecom/product/product.component';
import { ProductlistComponent } from './ecom/productlist/productlist.component';


const routes: Routes = [
  {
    path:'dashboard',component:DashboarComponent
  },
  
  {
    path:'product',component:ProductComponent
  }
  ,{
    path :'productlist/:id',component:ProductlistComponent
  },
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
