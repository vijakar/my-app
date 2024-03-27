import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllvehiclesService } from '../allvehicles.service';

@Component({
  selector: 'app-create-all-vehicles',
  templateUrl: './create-all-vehicles.component.html',
  styleUrls: ['./create-all-vehicles.component.css']
})
export class CreateAllVehiclesComponent {

  constructor(private _allvehiclesService :AllvehiclesService){}

  public carForm:FormGroup=new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model:new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl()
    }
)


submit(){
this._allvehiclesService.createCar(this.carForm.value).subscribe(
(data:any)=>{
  alert("created succesfully")
  this.carForm.reset();
},
(err:any)=>{
  alert("creation failed")
}
)  
}

}
