import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomePageLoginComponent } from './home-page-login/home-page-login.component';

const routes: Routes = [
  {path:'login',component:  HomePageLoginComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'addEmployee',component:AddEmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
