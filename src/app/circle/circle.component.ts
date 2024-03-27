import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  public Num1:number=0;
  public Result:number=0;
  public pi:number=3.14;
  
  area(){
    this.Result = this.pi*(this.Num1*this.Num1) ;
  }
  perimeter(){
    this.Result = 2* this.pi*this.Num1; 
  }
}
