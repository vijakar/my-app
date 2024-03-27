import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router:Router){ }

  logout(){
    localStorage.removeItem("my_app_token")
    this._router.navigateByUrl("/login")
  }

}
