import { Component } from '@angular/core';
import { SiblingTodoService } from '../sibling-todo.service';

@Component({
  selector: 'app-sibling-view',
  templateUrl: './sibling-view.component.html',
  styleUrls: ['./sibling-view.component.css']
})
export class SiblingViewComponent {
  public viewText:any={};

  constructor(private _siblingTodoService:SiblingTodoService){
    _siblingTodoService.getViewValue().subscribe(
      (data:any)=>{
        this.viewText=data;
      }
    )
  }

 
  }




