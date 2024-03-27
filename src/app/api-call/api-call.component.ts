import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent {

public apiData:any=[]

constructor(_apiCallService:ApiCallService){
  _apiCallService.getApi().subscribe(
    (data)=>{
      this.apiData = data;
    }, 
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
// refresh(){
// this._apiCallService.getApi().subscribe(

// )
// }


}