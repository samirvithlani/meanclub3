import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import  {HttpClientModule} from '@angular/common/http';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { ListdoctorComponent } from './doctor/listdoctor/listdoctor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterDoctorComponent } from './doctor/register-doctor/register-doctor.component';
import { ProductComponent } from './ecom/product/product.component';
import { ProductlistComponent } from './ecom/productlist/productlist.component';
import { DashboarComponent } from './ecom/dashboar/dashboar.component';
import { NavbarComponent } from './ecom/navbar/navbar.component';
import { CartComponent } from './ecom/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent,
    AdddoctorComponent,
    ListdoctorComponent,
    RegisterDoctorComponent,
    ProductComponent,
    ProductlistComponent,
    DashboarComponent,
    NavbarComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
