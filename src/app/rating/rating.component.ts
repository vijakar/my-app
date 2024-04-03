import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
public imgUrl:string=''

public countChar:string='';

rating1(){
  this.imgUrl='assets/1star.jpg'
}
rating2(){
  this.imgUrl='assets/2star.jpg'
}
rating3(){
  this.imgUrl='assets/3star.jpg'
}
rating4(){
  this.imgUrl='assets/4star.jpg'
}
rating5(){
  this.imgUrl='assets/5star.jpg'
}


}
