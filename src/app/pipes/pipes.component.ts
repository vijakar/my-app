import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  public title:string='WELCOME'
  public today:any= new Date()
  public user:any=[{name:'vijakar', age:20}]
}

