import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

public accounts:any=[]

public term:string='';
public pageNo:number=0;
public column:string='';
public order:string='';

constructor(private _accountsService:AccountsService){
  
  _accountsService.getAccounts().subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )

  
}

getSelectedAccount(){
  this._accountsService.getSelectedAccounts(this.term).subscribe(
    (data:any)=>{
      this.accounts =data;
    }, 
    (error:any)=>{
      alert("Internal server error")
    }
  )
}

getPage(){
  this._accountsService.getPages(this.pageNo).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (error:any)=>{
      alert("Internal server error")
    }
  )
}

getSort(){
  this._accountsService.getSortedBy(this.column, this.order).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (error:any)=>{
      alert("Internal server error")
    }
  )
}

}
