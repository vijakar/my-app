import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
public Num1:number=0;
public Num2:number=0;
public Result:number=0;

area(){
  this.Result = this.Num1 * this.Num2;
}
perimeter(){
  this.Result = 2*(this.Num1+this.Num2); 
}
}
