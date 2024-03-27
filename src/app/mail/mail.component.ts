import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  public mails:any=[]

  constructor(_mailService:MailService){
    _mailService.getMails().subscribe(
      (data)=>{
        this.mails = data
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }
}
