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
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { LogindoctorComponent } from './doctor/logindoctor/logindoctor.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { TranformPipe } from './tranform.pipe';
import { ConvertPipe } from './convert.pipe';
import {ChartModule} from 'primeng/chart';
import { EmployeechartComponent } from './employeechart/employeechart.component';
import { CurrencyconPipe } from './currencycon.pipe';




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
    EditdoctorComponent,
    LogindoctorComponent,
    PipedemoComponent,
    TranformPipe,
    ConvertPipe,
    EmployeechartComponent,
    CurrencyconPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added,
    BrowserAnimationsModule,
    ToastModule,
    TableModule,
    ChartModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
