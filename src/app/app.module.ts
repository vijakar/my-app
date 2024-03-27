import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindgingComponent } from './data-bindging/data-bindging.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { AllvehiclesComponent } from './allvehicles/allvehicles.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { PhotosComponent } from './photos/photos.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CreateAllVehiclesComponent } from './create-all-vehicles/create-all-vehicles.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import {MatIconModule} from '@angular/material/icon';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindgingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMICalculatorComponent,
    ProductsComponent,
    VehiclesComponent,
    CarsComponent,
    MyntraComponent,
    AllvehiclesComponent,
    AccountsComponent,
    PhotosComponent,
    FlipkartComponent,
    MailComponent,
    ApiCallComponent,
    AngularMaterialComponent,
    BottomsheetComponent,
    CreateAllVehiclesComponent,
    CreateAccountFormComponent,
    CreateUserFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

