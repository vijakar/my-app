import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent {
constructor(private  _accountsService:AccountsService){}

public accountForm=new FormGroup(
  {
    account_name:new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
    id:new FormControl()
  }
)

submiForm(){
  this._accountsService.submitForm(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("create account successfully")
    }, 
    (err:any)=>{
      alert("created failded")
    }
  )
  console.log(this.accountForm)
}

}
