import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {
public userForm:FormGroup = new FormGroup(
  {
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pin: new FormControl()
    }),

    cards: new FormArray([])
    
  }
)

get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}

add(){
  this.cardsFormArray.push(
    new FormGroup({
      number: new FormControl(),
      expiry: new FormControl(),
      cvv: new FormControl()
    })
  )
}

submit(){
  console.log(this.userForm);
}

delete(i:number){
  this.cardsFormArray.removeAt(i);
}
public dayInput:boolean=false;
public hostelInput:boolean=false;

public radioForm=new FormGroup({
  dayscholar: new FormControl(),
  residential:new FormControl(),
  busfee:new FormControl(),
  hostelfee:new FormControl()
})

onDayscholar(){
  this.dayInput = true;
  this.hostelInput = false;
}

onHostel(){
  this.hostelInput = true;
  this.dayInput = false
}



}
