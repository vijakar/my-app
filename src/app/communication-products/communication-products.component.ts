import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-communication-products',
  templateUrl: './communication-products.component.html',
  styleUrls: ['./communication-products.component.css']
})
export class CommunicationProductsComponent {
  constructor(private _commonService:CommonService){}
  ngOnInit():void{

    
  }

  add(){

    this._commonService.setValue()
  }
}
