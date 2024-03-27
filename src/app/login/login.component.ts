import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public age:number=20;

  constructor(private _loginService:LoginService, private  _router:Router){}

  public loginForm= new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()

    }
  )
  login(){
    this._loginService.submitLoginForm(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login success")
        localStorage.setItem("my_app_token",data.token)
        this._router.navigateByUrl("/dashboard");

      },
      (err:any)=>{
        alert("invalid Entries")
      }
    )
  }
}
