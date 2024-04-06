import { Component } from '@angular/core';
import { SiblingTodoService } from '../sibling-todo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sibling-create',
  templateUrl: './sibling-create.component.html',
  styleUrls: ['./sibling-create.component.css']
})
export class SiblingCreateComponent {

  constructor(private _siblingTodoService:SiblingTodoService){
    _siblingTodoService.getEditValue().subscribe(
      (data:any)=>{
        this.dataForm.patchValue(data)
      }
    )
    }



  public text:string=''
  public date:string=''
  
    public dataForm=new FormGroup(
      {
        text:new FormControl(),
        date:new FormControl()
      }
    )

    
 

  create(){
    this._siblingTodoService.setValue(this.dataForm.value)
  
  }

  reset(){
    this.text=''
    this.date=''
  }
 
}
