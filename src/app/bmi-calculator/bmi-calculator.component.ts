import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BMICalculatorComponent {
  public Num1:number=0;
  public Num2:number=0;
  public Result:number=0;
  
  calculate(){
    this.Result = this.Num1/((this.Num2/100)*(this.Num2/100));
  }
  
}
