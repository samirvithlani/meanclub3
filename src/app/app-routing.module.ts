import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { ListdoctorComponent } from './doctor/listdoctor/listdoctor.component';
import { LogindoctorComponent } from './doctor/logindoctor/logindoctor.component';
import { RegisterDoctorComponent } from './doctor/register-doctor/register-doctor.component';
import { CartComponent } from './ecom/cart/cart.component';
import { DashboarComponent } from './ecom/dashboar/dashboar.component';
import { NavbarComponent } from './ecom/navbar/navbar.component';
import { ProductComponent } from './ecom/product/product.component';
import { ProductlistComponent } from './ecom/productlist/productlist.component';
import { EmployeechartComponent } from './employeechart/employeechart.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';


const routes: Routes = [
  {
    path:'dashboard',component:DashboarComponent,canActivate:[AuthGuard]
  },
  
  {
    path:'product',component:ProductComponent
  }
  ,{
    path :'productlist/:id',component:ProductlistComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'regdoctor',component:RegisterDoctorComponent
  },{
    path:'listdoctor',component:ListdoctorComponent
  },{
    path:'editdoctor/:id',component:EditdoctorComponent
  },
  {
    path:'logindoctor',component:LogindoctorComponent
  },{
    path:'pipe',component:PipedemoComponent
  },
  {
    path:'chart',component:EmployeechartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
