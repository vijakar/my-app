import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { cvv, tcsMail } from './validators';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {
public userForm:FormGroup = new FormGroup(
  {
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email, tcsMail]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pin: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(99999)])
    }),

    cards: new FormArray([]),

  type:new FormControl(),
  
    
  }
)

get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}

add(){
  this.cardsFormArray.push(
    new FormGroup({
      number: new FormControl(null, Validators.required),
      expiry: new FormControl(),
      cvv: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3), cvv])
    })
  )
}


delete(i:number){
  
  this.cardsFormArray.removeAt(i);
}






constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayscholar'){
        this.userForm.addControl('busfee', new FormControl());
        this.userForm.removeControl("hostelfee");
      }
      else{
        this.userForm.addControl("hostelfee", new FormControl());
        this.userForm.removeControl("busfee")
      }
    }
  )
}

submit(){
  this.userForm.markAllAsTouched();
  console.log(this.userForm);
}


}
