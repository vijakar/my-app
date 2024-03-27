import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
public isHonda:boolean=false;
public isAudi:boolean=false;
public isBMW:boolean=false;

public car = ''
  
honda(){
  this.isHonda = true;
  this.isAudi = false;
  this.isBMW = false;
  }
  audi(){
    this.isAudi = true;
    this.isHonda = false;
    this.isBMW = false;
  }
  bmw(){
    this.isBMW = true;
    this.isHonda = false;
    this.isAudi = false;
  }

  public cars:any=[
    {image:'F:\Mohit training\my-app\src\assets'},
    {image:"F:\Mohit training\my-app\src\assets"},
    {image:"F:\Mohit training\my-app\src\assets"}
  ]

}
