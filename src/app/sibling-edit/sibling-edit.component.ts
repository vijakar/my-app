import { Component } from '@angular/core';
import { SiblingTodoService } from '../sibling-todo.service';

@Component({
  selector: 'app-sibling-edit',
  templateUrl: './sibling-edit.component.html',
  styleUrls: ['./sibling-edit.component.css']
})
export class SiblingEditComponent {
  public inputDatas:any=[]

  constructor(private _siblingTodoService:SiblingTodoService){
    _siblingTodoService.getValue().subscribe(
      (data:any)=>{
        this.inputDatas=data
      }
    )

  }

view(todo:any){
  this._siblingTodoService.setViewValue(todo);
} 

edit(todo:any){
  this._siblingTodoService.setEditValue(todo)

}

delete(i:any){
  this.inputDatas.splice(i,1)
}
 
}
