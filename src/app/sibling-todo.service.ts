import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingTodoService {

  public todos:any = [];

  constructor() { }
  // to store todos
  public dataSub$: BehaviorSubject<any>=new BehaviorSubject([]);
  setValue(data:any){
    this.todos.push(data);
    this.dataSub$.next(this.todos)
  }
  getValue(){
    return this.dataSub$.asObservable();
  }

  // to view selected todo
  public viewDataSub$: BehaviorSubject<any>=new BehaviorSubject({})
  setViewValue(data:any){
    this.viewDataSub$.next(data);
  }

  getViewValue(){
    return this.viewDataSub$.asObservable();
  }
  // to edit selected todo
  public editDataSub$: BehaviorSubject<any>=new BehaviorSubject({})  
  setEditValue(data:any){
    return this.editDataSub$.next(data)
  }

  getEditValue(){
    return this.editDataSub$.asObservable();
  }

}
