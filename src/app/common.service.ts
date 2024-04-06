import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public count:number=0;
  public countSub$: BehaviorSubject<any>=new BehaviorSubject(0);

  setValue(){
    this.count++;
    this.countSub$.next(this.count);
  }
  getValue(){
    return this.countSub$.asObservable();
  }

  
}
