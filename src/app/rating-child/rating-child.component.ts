import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating-child',
  templateUrl: './rating-child.component.html',
  styleUrls: ['./rating-child.component.css']
})
export class RatingChildComponent {

  @Input() public url:string=''
  @Output() public rateEvent:EventEmitter<any>=new EventEmitter();

  
}
