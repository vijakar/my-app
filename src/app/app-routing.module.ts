import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindgingComponent } from './data-bindging/data-bindging.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { AllvehiclesComponent } from './allvehicles/allvehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PhotosComponent } from './photos/photos.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { CreateAllVehiclesComponent } from './create-all-vehicles/create-all-vehicles.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard], children:[
    {path:"", component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'data-binding', component:DataBindgingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'bmicalculator', component:BMICalculatorComponent},
    {path:'products', component:ProductsComponent},
    {path:'vehicles', component:VehiclesComponent},
    {path:'car', component:CarsComponent},
    {path:'myntra', component:MyntraComponent},
    {path:'allvehicles', component:AllvehiclesComponent},
    {path:'accounts', component:AccountsComponent},
    {path:'photos', component:PhotosComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'mail', component:MailComponent},
    {path:'apicall', component:ApiCallComponent},
    {path:'materialui', component:AngularMaterialComponent},
    {path:'createallvehicles', component:CreateAllVehiclesComponent},
    {path:'creataccountform', component:CreateAccountFormComponent},
    {path:'createuserform', component:CreateUserFormComponent}
  ]},
  {path:"", component:LoginComponent},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }