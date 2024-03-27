import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public cards:any=[]
  constructor(_flipkartService:FlipkartService){
    _flipkartService.getCards().subscribe(
      (data)=>{
        this.cards=data;
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }
}
